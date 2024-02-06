import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddUserModalStateService } from '../../../../services/add-user-modal-state.service';
import { UsersService } from '../../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { AssignCouponModalService } from '../../../../services/assign-coupon-modal.service';
import { BookingCouponsService } from '../../../../services/booking-coupons.service';
import { BookingCoupon } from '../../../../models/BookingCoupon';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-assign-coupon',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './assign-coupon.component.html',
  styleUrl: './assign-coupon.component.css'
})
export class AssignCouponComponent {
  showModal: boolean = false;
  actualUserId: string = '';
  assingCouponForm: FormGroup;
  bookingCoupons: BookingCoupon[] = [];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private assignCouponModalService: AssignCouponModalService,
    private bookingService: BookingCouponsService,
  ) {
    this.assignCouponModalService.showModal$.subscribe(show => {
      this.showModal = show;
    });

    this.assingCouponForm = fb.group({
      coupon: [null]
    });
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.actualUserId = this.route.snapshot.params['id']
    this.bookingCoupons = this.bookingService.getBookingCoupons();
    this.assingCouponForm.patchValue({
      coupon: this.bookingCoupons[0],
    })
  }

  onSubmit(event: Event) {
    let users: User[] = this.usersService.getUsers();
  
    let userIndex = users.findIndex(user => user.id === this.actualUserId);
    
    if (userIndex !== -1) {
      let user = { ...users[userIndex] };

      let coupon = this.assingCouponForm.get('coupon')?.value;
      if (coupon) {
        user.bookingCoupons.push(coupon);
      }
      this.usersService.updateUser(user);      
    }

    this.assignCouponModalService.setShowModal(false);
  }

  onCancel(){
    this.assignCouponModalService.setShowModal(false);
  }
}
