import { Currency } from "../enums/Currecy";
import { BookingCoupon } from "../models/BookingCoupon";

export const MOCKS_BOOKING_COUPONS: BookingCoupon[] = [
  {
    id: "1",
    name: "5x6",
    price: 50,
    currency: Currency.DOLAR,
    totalHours: 6,
  },
  {
    id: "2",
    name: "Black Friday",
    price: 40,
    currency: Currency.DOLAR,
    totalHours: 6,
  },
]