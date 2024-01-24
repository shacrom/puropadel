import { Component, Input } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import { User } from '../../models/User';
import { AddDateModalComponent } from './components/add-date-modal/add-date-modal.component';
import { BookingCoupon } from '../../models/BookingCoupon';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { MOCKS_USERS } from '../../data/UsersMock';
import { RouterModule } from '@angular/router';
import { CouponsUserTableComponent } from './components/tables/coupons-user-table/coupons-user-table.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, UsersTableComponent, AddDateModalComponent, AddUserModalComponent, RouterModule, CouponsUserTableComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  users = MOCKS_USERS;
  showUsersTable = true;
  showCouponsUserTable = false;
  showAddUserModal = false;
  userToShow!: User;

  onShowAddUserModal(){
    this.showAddUserModal = !this.showAddUserModal;
  }

  onShowCouponsUserTable(user: User) {
    this.userToShow = user;
    this.showUsersTable = false;
    this.showCouponsUserTable = true;
  }

  onShowUsersTable() {
    this.showUsersTable = true;
    this.showCouponsUserTable = false;
  }

  handleAddUserModal(user: User){
    this.users.push(user);
    this.showAddUserModal = !this.showAddUserModal;
    console.log(this.users.length);
  }
}
