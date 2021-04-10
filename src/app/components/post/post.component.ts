import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from 'src/app/common/models/post.model';
import { FakeDataService } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  constructor(public fakeData: FakeDataService) {
    this.loadMore();
  }
  ngOnInit(): void {}

  createNewPost() {
    let data = this.fakeData.posts(1);
    this.posts.unshift(...data);
    document.body.firstElementChild?.scrollIntoView();
  }

  loadMore() {
    let data = this.fakeData.posts(Math.ceil(Math.random() * 20));
    this.posts.push(...data);
  }
}
