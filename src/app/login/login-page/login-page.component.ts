import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public invalidUsername = false;
  public invalidPassword = false;
  public accessDenied = false;

  public username: string;
  public password: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  public loginClicked() {
    this.validateUsername(this.username);
    this.validatePassword(this.password);

    if (!this.invalidUsername && !this.invalidPassword) {
      this.authService.logIn(this.username, this.password)
        .subscribe(() => this.loginSuccesful(), () => this.loginError());
    }
  }

  private loginSuccesful(): void {
    this.accessDenied = false;
    const targetUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '';
    this.router.navigate([targetUrl]);
    console.log("Logged in successfully.");
  }
  private loginError(): void {
    this.accessDenied = true;
    console.log("Access denied.");
  }

  private validateUsername(username: string): void {
    this.invalidUsername = !this.isNotEmpty(username);
  }

  private validatePassword(password: string): void {
    this.invalidPassword = !this.isNotEmpty(password);
  }

  private isNotEmpty(text: string): boolean {
    return text && text.length > 0;
  }
}
