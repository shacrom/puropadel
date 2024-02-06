import { Routes } from '@angular/router';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UsersTableComponent } from './pages/admin-dashboard/components/tables/users-table/users-table.component';
import { CouponsTableComponent } from './pages/admin-dashboard/components/tables/coupons-table/coupons-table.component';
import { CouponsUserTableComponent } from './pages/admin-dashboard/components/tables/coupons-user-table/coupons-user-table.component';

export const routes: Routes = [
  { path: 'user-login', component: UserAuthComponent },
  { path: 'admin-login', component: AdminAuthComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', 
        pathMatch: 'full', 
        redirectTo: 'users' 
      },
      {
        path: 'users',
        component: UsersTableComponent,
      },
      {
        path: 'users/:id/coupons',
        component: CouponsUserTableComponent
      },
      {
        path: 'coupons',
        component: CouponsTableComponent
      }
    ]
  },
  { path: '', redirectTo: '/user-login', pathMatch: 'full' }
];
