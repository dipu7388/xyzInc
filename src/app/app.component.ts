import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeDataService } from './services/fake-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'xyz';
  public btoa = btoa;

  constructor(public fakerDs: FakeDataService, public router: Router) {}

  ngOnInit() {}

  /**
   * clear current user stream
   * clear localstorage
   * navigate to home
   */
  logout() {
    this.fakerDs.updateUser();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
