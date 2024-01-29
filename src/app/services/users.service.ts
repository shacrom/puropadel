import { Injectable } from '@angular/core';
import { MOCKS_USERS } from '../data/UsersMock';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor() { 
    this.users = MOCKS_USERS;  
  }

  getUsers(): User[] {
    return this.users;
  }

  setUsers(users: User[]): void {
    this.users = users;
    console.log(this.users);
    
  }
}
