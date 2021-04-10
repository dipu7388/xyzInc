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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private fakeService: FakeDataService
  ) {
    this.validationMessages = {
      password: {
        required: 'Name is required.',
        minlength: 'Name must be at least three characters.',
        maxlength: 'Name cannot exceed 50 characters.',
      },
      email: {
        required: 'Email ID is required.',
        pattern: 'Email id must be Valid',
      },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.dataForm = this.fb.group({
      email: [
        'dheerendra.mcs16.du@gmail.com',
        [Validators.required, Validators.pattern(this.emailRegex)],
      ],
      password: [
        'password',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  ngOnInit() {}
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];
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

  submitForm(): void {
    if (this.dataForm.valid) {
      if (
        this.dataForm.value.email.toLowerCase() ===
          'dheerendra.mcs16.du@gmail.com' &&
        this.dataForm.value.password === 'password'
      ) {
        let user = this.fakeService.getAuthor();
        localStorage.setItem('user', JSON.stringify(user));
        this.fakeService.updateUser(user);
        let url =
          this.route.snapshot.queryParamMap.get('redirectTo') || btoa('/');
        url = atob(url);
        this.router.navigate([url], { queryParams: { redirectTo: undefined } });
      } else {
        alert(
          'enter emailId : dheerendra.mcs16.du@gmail.com \n  and password password '
        );
      }
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.dataForm.reset();
  }

  patchValues(data: { [key: string]: any }) {
    this.dataForm.setValue(data);
  }

  ngOnDestroy() {}
}
