import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, AdminDashboardComponent, AdminAuthComponent, UserDashboardComponent, UserAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'puropadel';
}
