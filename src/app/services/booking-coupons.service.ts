import { Injectable } from '@angular/core';
import { BookingCoupon } from '../models/BookingCoupon';
import { MOCKS_BOOKING_COUPONS } from '../data/BookingCouponsMock';

@Injectable({
  providedIn: 'root'
})
export class BookingCouponsService {
  bookingCoupons: BookingCoupon[] = [];

  constructor() { 
    this.bookingCoupons = MOCKS_BOOKING_COUPONS;
  }

  getBookingCoupons(): BookingCoupon[] {
    return this.bookingCoupons;
  }

  setBookingCoupons(bookingCoupons: BookingCoupon[]): void {
    this.bookingCoupons = bookingCoupons;
  }
}
