import { Routes } from '@angular/router';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {path: 'user-login', component: UserAuthComponent},
  {path: 'admin-login', component: AdminAuthComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: '', redirectTo: '/user-login', pathMatch: 'full' }
];
