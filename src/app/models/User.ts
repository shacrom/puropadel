import { BookingCoupon } from "./BookingCoupon";

export interface User{
  name: string;
  lastname: string;
  email: string,
  phone: string,
  identityCard: string,
  bookingCoupons?: BookingCoupon[];
}