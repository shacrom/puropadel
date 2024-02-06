import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { AddUserModalStateService } from '../../../../services/add-user-modal-state.service';
import { BookingCouponsService } from '../../../../services/booking-coupons.service';
import { AddCouponModalComponent } from '../add-coupon-modal/add-coupon-modal.component';
import { AddCouponModalService } from '../../../../services/add-coupon-modal.service';
import { AssignCouponModalService } from '../../../../services/assign-coupon-modal.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  component: string | undefined = "";
  showAddUserButton = false;
  showAssignCouponButton = false;
  showCreateCouponButton = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private addUserModalService: AddUserModalStateService,
    private addCouponModalService: AddCouponModalService,
    private assignCouponModalService: AssignCouponModalService,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateHeaderButton();
    });

    this.updateHeaderButton();
  }

  updateHeaderButton() {
    let currentRoute = this.route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    
    currentRoute.url.subscribe(segments => {
      this.showAddUserButton = false;
      this.showAssignCouponButton = false;
      this.showCreateCouponButton = false;
      
      const path = segments.map(s => s.path).join('/');
      
      if (path.includes('users') && path.includes('coupons')) {
        this.showAssignCouponButton = true;
      } else if (path.includes('coupons')) {
        this.showCreateCouponButton = true;
      } else if (path.includes('users')){
        this.showAddUserButton = true;
      }
    });
  }

  onAddUser() {
    this.addUserModalService.setShowModal(true);
  }

  onAssignCoupon() {
    this.assignCouponModalService.setShowModal(true);
  }

  onCreateCoupon() {
    this.addCouponModalService.setShowModal(true);
  }
}
