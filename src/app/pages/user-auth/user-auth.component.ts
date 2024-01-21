import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {

  cedula: string

  constructor(private router: Router) {
    this.cedula = "";
  }

  onSubmit() {
    if (this.cedula == "1234") {
      this.router.navigate(['/user-dashboard']);
    } else {
      alert("Cédula incorrecta");
    }
  }
}
