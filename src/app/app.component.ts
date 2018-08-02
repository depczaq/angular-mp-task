import { Component } from '@angular/core';
import { AuthenticationService } from 'app/core/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthenticationService) {
  }

  get loggedIn() {
    return this.authService.isAutheticated();
  }
}
