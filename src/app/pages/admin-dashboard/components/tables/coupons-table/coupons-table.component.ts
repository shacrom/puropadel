import { Component } from '@angular/core';
import { MOCKS_BOOKING_COUPONS } from '../../../../../data/BookingCouponsMock';
import { BookingCoupon } from '../../../../../models/BookingCoupon';
import { BookingCouponsService } from '../../../../../services/booking-coupons.service';

@Component({
  selector: 'app-coupons-table',
  standalone: true,
  imports: [],
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
