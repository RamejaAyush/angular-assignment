import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private userAuth: UserAuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuth.userCanLogIn) {
      this.toaster.error('Can not access that');
      this.router.navigate(['dashboard']);
    }
    return true;
  }
}
