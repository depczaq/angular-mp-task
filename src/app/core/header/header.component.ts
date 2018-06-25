import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { User } from '../user';

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
