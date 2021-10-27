import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  userCanLogIn: boolean = false;
  localUrl = '../../assets/items.json';

  constructor(private router: Router, private toaster: ToastrService) {}

  logIn(username, password) {
    if (username == '') {
      this.toaster.error('Please enter a valid username');
      this.router.navigate(['log-in']);
    } else if (password == '') {
      this.toaster.error('Please enter a valid password');
      this.router.navigate(['log-in']);
    } else {
      this.userCanLogIn = true;
      this.toaster.success(`Welcome ${username}`);
      this.router.navigate(['dashboard']);
    }
  }

  signUp(username, password) {
    if (username == '') {
      this.toaster.error('Please enter a valid username');
      this.router.navigate(['log-in']);
    } else if (password == '') {
      this.toaster.error('Please enter a valid password');
      this.router.navigate(['log-in']);
    } else {
      this.userCanLogIn = true;
      this.router.navigate(['dashboard']);
      this.toaster.success(`Welcome ${username}`);
    }
  }

  logOut() {
    this.userCanLogIn = false;
    this.router.navigate(['log-in']);
    this.toaster.success(`See you soon`);
  }
}
