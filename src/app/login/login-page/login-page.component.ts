import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'app/core/authentication.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private invalidUsername = false;
  private invalidPassword = false;

  private username: string;
  private password: string;


  constructor(private authService: AuthenticationService) { }

  public loginClicked() {
    this.validateUsername(this.username);
    this.validatePassword(this.password);

    if (!this.invalidUsername && !this.invalidPassword) {
      const md5password = Md5.hashStr(this.password).toString();
      console.log(md5password);
      this.authService.logIn(this.username, md5password);
      console.log("Logged in successfully.");
    }
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
