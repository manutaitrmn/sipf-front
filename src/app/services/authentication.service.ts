import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username == 'user' && password == 'password') {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    }
    return false;
  }

  unauthenticate() {
    sessionStorage.removeItem('authenticatedUser')
    return true
  }

  isAuthenticated() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
}
