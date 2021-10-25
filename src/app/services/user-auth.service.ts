import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  userCanLogIn: boolean = true;

  constructor(private router: Router) {}

  logIn(username, password) {
    if (username == '') {
      window.alert('Please enter a valid username');
      this.router.navigate(['log-in']);
    } else if (password == '') {
      window.alert('Please enter a valid password');
      this.router.navigate(['log-in']);
    } else {
      this.userCanLogIn = true;
      this.router.navigate(['dashboard']);
    }
  }

  signUp(username, password) {
    if (username == '') {
      window.alert('Please enter a valid username');
      this.router.navigate(['log-in']);
    } else if (password == '') {
      window.alert('Please enter a valid password');
      this.router.navigate(['log-in']);
    } else {
      this.userCanLogIn = true;
      this.router.navigate(['dashboard']);
    }
  }

  logOut() {
    this.userCanLogIn = true;
  }
}
