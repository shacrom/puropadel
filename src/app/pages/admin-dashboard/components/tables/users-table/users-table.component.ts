import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../models/User';
import { MOCKS_USERS } from '../../../../../data/UsersMock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  @Output() onShowCouponsUserTableEvent = new EventEmitter<User>();
  @Input() users = MOCKS_USERS;

  constructor(private router: Router){}
 
  goToCouponsUser(user: User){
    this.router.navigate(['/admin-dashboard/users', user.id, 'coupons']);
  }
}
