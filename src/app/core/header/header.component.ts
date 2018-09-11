import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() public loggedIn: boolean;

  public loggedUser = '';

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnChanges(): void {
    if (this.loggedIn) {
      this.authService.getUserInfo().subscribe(
        (response) => { this.loggedUser = response.name.first; },
        (error) => { console.error(error), this.loggedUser = ''; }
      );
    } else {
      this.loggedUser = '';
    }
  }

  private logOffClicked() {
    console.log("Logging out.");
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
