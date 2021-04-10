import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  seed,
  image,
  internet,
  lorem,
  name,
  seedValue,
  database,
  unique,
  helpers,
  datatype,
  git,
  date,
} from 'faker';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comment } from '../common/models/comment.model';
import { Post } from '../common/models/post.model';
@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  imgFn = [
    image.abstract,
    image.animals,
    image.avatar,
    image.business,
    image.cats,
    image.city,
    image.fashion,
    image.food,
    image.image,
    image.imageUrl,
    image.nature,
    image.technics,
    image.sports,
    image.nightlife,
    image.animals,
    image.people,
    image.transport,
  ];
  private currentUserBS!: BehaviorSubject<any>;
  public currentUser$!: Observable<any>;
  constructor(private router: Router) {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
    }
    this.currentUserBS = new BehaviorSubject(user);
    this.currentUser$ = this.currentUserBS.asObservable();
  }

  public updateUser(user?: any) {
    if (user) this.currentUserBS.next(Object.assign({}, user));
    else this.currentUserBS.next(undefined);
  }

  posts(count: number) {
    return Array(count)
      .fill(false)
      .map((e) => this.getSinglePost());
  }

  getSinglePost(id?: string): Post {
    let x: Post = {} as any;
    x.id = id || datatype.uuid();
    x.author = helpers.userCard() as any;
    let prob = Math.floor(Math.random() * (this.imgFn.length - 1));
    x.image = this.imgFn[prob]();
    x.title = lorem.sentence();
    x.desc = lorem.sentences();
    x.content = lorem.paragraphs();
    x.date = date.past();
    return x;
  }

  getCommentsForPost(id: string, count: number) {
    return Array(count)
      .fill(false)
      .map((e) => this.getSingleComment(id));
  }

  getOnlyOneComment(postId: string, parentCommentId?: string) {
    let comment = new Comment();
    comment.postId = postId;
    comment.author = helpers.userCard() as any;
    comment.author.avatar = image.avatar();
    comment.id = parentCommentId || datatype.uuid();
    comment.content = git.commitMessage();
    comment.date = date.past();
    comment.likeCount = datatype.number(20);
    comment.dislikeCount = datatype.number(30);
    return comment;
  }
  getSingleComment(postId: string, parentCommentId?: string) {
    let comment = this.getOnlyOneComment(postId, parentCommentId);
    let prob =
      Math.round(Math.random() * (comment.threads.length + 1)) <=
      comment.threads.length / 2;
    if (prob) comment.threads.push(this.getSingleComment(postId, comment.id));
    return comment;
  }

  getAuthor() {
    let author: any = helpers.userCard();
    author.avatar = image.avatar();
    return author;
  }

  public loginAndBack() {
    this.router.navigate(['/login'], {
      queryParams: { redirectTo: btoa(this.router.url) },
    });
  }
}
