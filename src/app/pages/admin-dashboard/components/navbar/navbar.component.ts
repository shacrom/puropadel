import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(private router: Router) {
  }

  goToUsers(){
    this.router.navigate(['/admin-dashboard/users'])
  }

  goToCoupons() {
    this.router.navigate(['/admin-dashboard/coupons']);
  }
}
