import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService) {
  }

  private get loggedUser(): string {
    return this.authService.getUserInfo();
  }

  private logOffClicked() {
    console.log("Logging out.");
    this.authService.logOut();
  }
}
