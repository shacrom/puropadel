import { Injectable } from '@angular/core';
import { MOCKS_USERS } from '../data/UsersMock';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersSubject = new BehaviorSubject<User[]>(MOCKS_USERS);
  users$ = this.usersSubject.asObservable();

  updateUser(newUser: User) {
    let users = this.usersSubject.value;
    let userIndex = users.findIndex(user => user.id === newUser.id);
    
    users[userIndex] = newUser;
    
    this.usersSubject.next(users);
  }

  getUsers(): User[] {
    return this.usersSubject.value;
  }

  setUsers(users: User[]): void {
    this.usersSubject.next(users); 
  }
}
