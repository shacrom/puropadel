import { Component, Input } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import { CouponsUserTableComponent } from './components/tables/coupons-user-table/coupons-user-table.component';
import { User } from '../../models/User';
import { AddDateModalComponent } from './components/add-date-modal/add-date-modal.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, UsersTableComponent, CouponsUserTableComponent, AddDateModalComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  showUsersTable = true;
  showCouponsUserTable = false;
  userToShow!: User;
  showAddDateModal = false;
  couponToModify = [];

  onShowCouponsUserTable(user: User) {
    this.userToShow = user;
    this.showUsersTable = false;
    this.showCouponsUserTable = true;
  }

  onShowUsersTable() {
    this.showUsersTable = true;
    this.showCouponsUserTable = false;
  }

  handleAddDateModal(data: any) {
    this.couponToModify = data;
    this.showAddDateModal = !this.showAddDateModal;
  }
}
