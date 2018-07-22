import { Injectable } from '@angular/core';

const usernameKey = 'username';
const passwordKey = 'password';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public logIn(username: string, password: string): void {
    localStorage.setItem(usernameKey, username);
    localStorage.setItem(passwordKey, password);
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
