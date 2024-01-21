import { User } from "./User";

export interface ClassCoupon{
  bookingUser: User;
  numberOfUsers: number;
  totalPaid: number;
  couponUsage: Date[];
}