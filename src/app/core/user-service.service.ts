import { Injectable } from '@angular/core';
import { User } from './user';
import { BasicUser } from './basic-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getLoggedUser (): User {
    return new BasicUser(1, "Miłosz", "Depczyński");
  }
}
