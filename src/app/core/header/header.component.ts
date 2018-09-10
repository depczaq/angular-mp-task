import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  public get loggedUser(): string {
    return this.authService.getUserInfo();
  }

  private logOffClicked() {
    console.log("Logging out.");
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
