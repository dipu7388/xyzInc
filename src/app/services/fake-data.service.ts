import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { image, git } from 'faker';
import { BehaviorSubject, Observable } from 'rxjs';
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

  public loginAndBack() {
    this.router.navigate(['/login'], {
      queryParams: { redirectTo: btoa(this.router.url) },
    });
  }

  getSingleMedia() {
    let media: any = {};
    let prob = Math.floor(Math.random() * (this.imgFn.length - 1));
    media.image = this.imgFn[prob]();
    media.title = git.commitMessage();
    return media;
  }

  mediaImages(count: number) {
    return Array(count)
      .fill(false)
      .map((e) => this.getSingleMedia());
  }
}
