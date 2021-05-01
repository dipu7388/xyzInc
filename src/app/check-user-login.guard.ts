import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { USERDB } from './common/user.array';
import { FakeDataService } from './services/fake-data.service';

@Injectable({
  providedIn: 'root',
})
export class CheckUserLoginGuard implements CanActivate {
  constructor(private fakeService: FakeDataService, private router: Router) {}
  /**
   * check user in local storage available in our database or not;
   * if user exists in our db then activate routes.
   * otherwise redirect to login page and after successful login current page will be shown to user.
   * @param route
   * @param state
   * @returns
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      let { userid, password } = JSON.parse(
        localStorage.getItem('user') || '{}'
      );
      userid = userid?.trim();
      password = password?.trim();
      let user = USERDB.find((e) => e.userid === userid);
      if (user && user?.userid === userid && user?.password === password) {
        resolve(true);
      } else {
        this.router
          .navigate(['/login'], {
            queryParams: { redirectTo: btoa(state.url) },
          })
          .then((e) => resolve(false));
      }
    });
  }
}
