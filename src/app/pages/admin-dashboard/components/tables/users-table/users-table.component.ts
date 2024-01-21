import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MOCKS_USERS } from '../../../../../data/UsersMock';
import { User } from '../../../../../models/User';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  @Output() onShowCouponsUserTableEvent = new EventEmitter<User>();

  users = MOCKS_USERS;

  triggerEvent(user: User){
    this.onShowCouponsUserTableEvent.emit(user);
  }
}
