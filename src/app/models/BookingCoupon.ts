import { Currency } from "../enums/Currecy";
import { CouponUsage } from "./CouponUsage";

export interface BookingCoupon{
  id: string;
  name: string,
  price: number,
  currency: Currency,
  totalHours: number,
  couponUsages?: CouponUsage[],
}