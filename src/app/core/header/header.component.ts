import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/user';
import { UserService } from 'app/core/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedUser: User;

  constructor(userService: UserService) {
    this.loggedUser = userService.getLoggedUser();
  }

  ngOnInit() {
  }
}
