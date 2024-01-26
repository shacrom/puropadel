import { Component } from '@angular/core';
import { MOCKS_BOOKING_COUPONS } from '../../../../../data/BookingCouponsMock';

@Component({
  selector: 'app-coupons-table',
  standalone: true,
  imports: [],
  templateUrl: './coupons-table.component.html',
  styleUrl: './coupons-table.component.css'
})
export class CouponsTableComponent {
  bookingCouponsTypes = MOCKS_BOOKING_COUPONS;
  
  ngOnInit() {
    console.log(this.bookingCouponsTypes);
  }

  deleteCoupon(couponTypeId: string){
    this.bookingCouponsTypes = this.bookingCouponsTypes.filter(couponType => couponType.id !== couponTypeId);
    
  }
}
