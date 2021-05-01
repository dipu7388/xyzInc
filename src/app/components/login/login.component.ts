import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { USERDB } from 'src/app/common/user.array';
import { GenericValidator } from 'src/app/common/validations/generic-validator';
import { FakeDataService } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  submitButtonValue = 'Login';
  emailRegex = new RegExp('^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+[.]{1}[a-zA-Z0-9]+$');
  /**
   * create form and assign validators
   * @param fb
   * @param router
   * @param route
   * @param fakeService
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private fakeService: FakeDataService
  ) {
    this.validationMessages = {
      password: {
        required: 'User Id is required.',
        minlength: 'User id be at least three characters.',
        maxlength: 'User Id exceed 50 characters.',
      },
      email: {
        required: 'Email ID is required.',
        pattern: 'Email id must be Valid',
      },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.dataForm = this.fb.group({
      email: [
        'abc@media.com',
        [Validators.required, Validators.pattern(this.emailRegex)],
      ],
      password: [
        'abc123',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  ngOnInit() {}
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];
  /**
   * listen value change of form element
   */
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    merge(this.dataForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe(() => {
        this.displayMessage = this.genericValidator.processMessages(
          this.dataForm
        );
      });
  }
  /**
   * login action
   * check user exists in our db
   * if it has then it redirects to redirect param
   * othewise redirect to home
   */
  submitForm(): void {
    if (this.dataForm.valid) {
      let { email, password } = this.dataForm.value;
      email = email?.trim();
      password = password?.trim();
      let user = USERDB.find((e) => e.userid === email);
      if (user?.userid === email && user?.password === password) {
        localStorage.setItem('user', JSON.stringify(user));
        this.fakeService.updateUser(user);
        let url =
          this.route.snapshot.queryParamMap.get('redirectTo') || btoa('/');
        url = atob(url);
        this.router.navigate([url], { queryParams: { redirectTo: undefined } });
      } else {
        alert('enter valid emailId  \n  and password');
      }
    }
  }
  /**
   * reset form
   */
  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.dataForm.reset();
  }
  /**
   * patch form value
   * @param data
   */
  patchValues(data: { [key: string]: any }) {
    this.dataForm.setValue(data);
  }

  ngOnDestroy() {}
}
