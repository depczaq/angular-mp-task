import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/user.model';
import { UserService } from 'app/core/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loggedUser = this.userService.getLoggedUser();
  }
}
