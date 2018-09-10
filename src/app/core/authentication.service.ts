import { Injectable } from '@angular/core';

const usernameKey = 'username';
const passwordKey = 'password';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public redirectUrl: string;

  constructor() { }

  public logIn(username: string, password: string): boolean {
    localStorage.setItem(usernameKey, username);
    localStorage.setItem(passwordKey, password);
    return this.isAutheticated();
  }

  public logOut(): void {
    localStorage.removeItem(usernameKey);
    localStorage.removeItem(passwordKey);
  }

  public isAutheticated(): boolean {
    return localStorage.getItem(usernameKey) ? true : false;
  }

  public getUserInfo(): string {
    const user = localStorage.getItem(usernameKey);
    return user ? user : '';
  }
}
