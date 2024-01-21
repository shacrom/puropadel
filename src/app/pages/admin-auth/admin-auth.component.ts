import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../models/Admin';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent {
  admin!: Admin;
  username?: string
  password?: string
  constructor(private router: Router) {
  }

  onSubmit() {
    if (this.username == "admin" && this.password == "admin") {
      this.admin.username = this.username;
      this.admin.password = this.password;
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert("Datos de inicio de sesión incorrectos");
    }
  }
}
