import { Injectable } from '@angular/core';
import { BookingCoupon } from '../models/BookingCoupon';
import { MOCKS_BOOKING_COUPONS } from '../data/BookingCouponsMock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingCouponsService {
  
  private bookingCouponsSubject = new BehaviorSubject<BookingCoupon[]>(MOCKS_BOOKING_COUPONS);
  bookingCoupons$ = this.bookingCouponsSubject.asObservable();

  getBookingCoupons(): BookingCoupon[] {
    return this.bookingCouponsSubject.value;
  }

  setBookingCoupons(bookingCoupons: BookingCoupon[]): void {
    this.bookingCouponsSubject.next(bookingCoupons);
  }
}
