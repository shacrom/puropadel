import { Component } from '@angular/core';
import { BookingCouponsService } from '../../../../../services/booking-coupons.service';
import { AddCouponModalComponent } from '../../add-coupon-modal/add-coupon-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupons-table',
  standalone: true,
  imports: [AddCouponModalComponent],
  templateUrl: './coupons-table.component.html',
  styleUrl: './coupons-table.component.css'
})
export class CouponsTableComponent {
  bookingCouponsTypes;

  constructor(
    private bookingsService: BookingCouponsService,
    private route: ActivatedRoute,
  ) {
    this.bookingCouponsTypes = this.bookingsService.getBookingCoupons();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookingsService.bookingCoupons$.subscribe(bookingCoupons => {
        this.bookingCouponsTypes = bookingCoupons;
      });
    });
  }

  deleteCoupon(couponTypeId: string) {
    this.bookingCouponsTypes = this.bookingCouponsTypes.filter(couponType => couponType.id !== couponTypeId);

  }
}
