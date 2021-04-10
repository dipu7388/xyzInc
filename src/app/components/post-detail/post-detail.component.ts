import { Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/common/models/comment.model';
import { Post } from 'src/app/common/models/post.model';
import { FakeDataService } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  blogModel!: Post;
  comments: Comment[] = [];
  user: any;
  constructor(
    private route: ActivatedRoute,
    public faker: FakeDataService,
    private location: Location
  ) {
    faker.currentUser$.subscribe((e) => (this.user = e));
    let id = route.snapshot.paramMap.get('id');
    if (id) {
      let post = faker.getSinglePost(id);
      this.blogModel = post;
      this.loadMore();
    }
  }

  ngOnInit(): void {}

  moveBack() {}

  addComment(txtArea: any, parent: Comment, cmts: Comment[]) {
    let genComment = this.faker.getOnlyOneComment(
      this.route.snapshot.paramMap.get('id') || ''
    );
    genComment.content = txtArea.value;
    genComment.author.name = this.user.name;
    genComment.author.email = this.user.email;
    genComment.author.avatar = this.user.avatar;
    genComment.date = new Date();
    txtArea.value = '';
    if (parent) {
      parent.reply = false;
    }
    parent ? cmts.unshift(genComment) : cmts.push(genComment);
  }

  loadMore() {
    let cmts = this.faker.getCommentsForPost(
      this.route.snapshot.paramMap.get('id') || 'NA',
      Math.ceil(Math.random() * 20)
    );
    this.comments.push(...cmts);
  }
}
