import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BasicUser } from './basic-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getLoggedUser (): User {
    return new BasicUser(1, "Miłosz", "Depczyński");
  }
}
