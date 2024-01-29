import { Component } from '@angular/core';
import { BookingCouponsService } from '../../../../../services/booking-coupons.service';
import { AddCouponModalComponent } from '../../add-coupon-modal/add-coupon-modal.component';

@Component({
  selector: 'app-coupons-table',
  standalone: true,
  imports: [AddCouponModalComponent],
  templateUrl: './coupons-table.component.html',
  styleUrl: './coupons-table.component.css'
})
export class CouponsTableComponent {
  bookingCouponsTypes;
  
  constructor(private bookingsService: BookingCouponsService){
    this.bookingCouponsTypes = this.bookingsService.getBookingCoupons();
  }

  ngOnInit() {
    console.log(this.bookingCouponsTypes);
  }

  deleteCoupon(couponTypeId: string){
    this.bookingCouponsTypes = this.bookingCouponsTypes.filter(couponType => couponType.id !== couponTypeId);
    
  }
}
