import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './common/models/post.model';
import { FakeDataService } from './services/fake-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'disqus';
  public btoa = btoa;

  constructor(public fakerDs: FakeDataService, public router: Router) {}

  ngOnInit() {}

  logout() {
    this.fakerDs.updateUser();
    localStorage.clear();
  }
}
