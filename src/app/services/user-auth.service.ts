import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  userCanLogIn: boolean = false;

  constructor() {}

  logIn() {
    this.userCanLogIn = true;
  }

  signUp() {
    this.userCanLogIn = true;
  }

  logOut() {
    this.userCanLogIn = true;
  }
}
