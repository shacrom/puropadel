import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../models/User';
import { MOCKS_USERS } from '../../../../../data/UsersMock';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../services/users.service';
import { AddUserModalComponent } from '../../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, AddUserModalComponent],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  @Output() onShowCouponsUserTableEvent = new EventEmitter<User>();
  users: User[] = [];

  constructor(private router: Router, private usersService: UsersService){}

  ngOnInit(){
    this.users = this.usersService.getUsers();
  }
 
  goToCouponsUser(user: User){
    this.router.navigate(['/admin-dashboard/users', user.id, 'coupons']);
  }
}
