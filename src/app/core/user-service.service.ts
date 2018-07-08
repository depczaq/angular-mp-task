import { Injectable } from '@angular/core';
import { BasicUser } from 'app/core/basic-user';
import { User } from 'app/core/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getLoggedUser(): User {
    return new BasicUser(1, "Miłosz", "Depczyński");
  }
}
