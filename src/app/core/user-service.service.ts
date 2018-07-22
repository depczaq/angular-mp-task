import { Injectable } from '@angular/core';
import { BasicUser } from 'app/core/basic-user.model';
import { User } from 'app/core/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getLoggedUser(): User {
    return new BasicUser({
      id: 1,
      firstName: "Miłosz",
      lastName: "Depczyński"
    });
  }
}
