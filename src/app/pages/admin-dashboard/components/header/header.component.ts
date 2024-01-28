import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { AddUserModalStateService } from '../../../../services/add-user-modal-state.service';
import { BookingCouponsService } from '../../../../services/booking-coupons.service';
import { AddCouponModalComponent } from '../add-coupon-modal/add-coupon-modal.component';
import { AddCouponModalService } from '../../../../services/add-coupon-modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  component: string | undefined = "";

  constructor(
    private route: ActivatedRoute,
    private addUserModalService: AddUserModalStateService,
    private addCouponModalService: AddCouponModalService,
  ) { }

  ngOnInit() {
    this.component = this.route.children[0].component?.name;
    console.log(this.component);

  }

  onAddUser() {
    this.addUserModalService.setShowModal(true);
  }

  onAddCoupon() {
    this.addCouponModalService.setShowModal(true);
  }

  onCreateCoupon() {

  }

}
