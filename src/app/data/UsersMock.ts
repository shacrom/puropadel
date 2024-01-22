import { Currency } from "../enums/Currecy";
import { User } from "../models/User";

export const MOCKS_USERS: User[] = [
  {
    id: "1",
    name: 'Usuario1',
    lastname: 'Lastname1',
    email: 'usuario1@gmail.com',
    phone: '666777888',
    identityCard: '3-5470-4922',
    bookingCoupons: [
      {
        id: "1",
        name: "5x6",
        price: 50,
        currency: Currency.DOLAR,
        totalHours: 6,
        couponUsages: [
          {
            hoursSpent: 1,
            dateUsed: new Date,
          },
          {
            hoursSpent: 1,
            dateUsed: new Date,
          },
          {
            hoursSpent: 1,
            dateUsed: new Date,
          },
          {
            hoursSpent: 1,
            dateUsed: new Date,
          },
        ],
      },
      {
        id: "2",
        name: "5x6",
        price: 50,
        currency: Currency.DOLAR,
        totalHours: 6,
        couponUsages: [
          {
            hoursSpent: 1,
            dateUsed: new Date,
          },
          {
            hoursSpent: 1,
            dateUsed: new Date,
          },
        ],
      }
    ]
  },
  {
    id: "2",
    name: 'Usuario2',
    lastname: 'Lastname2',
    email: 'usuario2@gmail.com',
    phone: '666777888',
    identityCard: '3-7024-2457',
    bookingCoupons: []
  },
  {
    id: "3",
    name: 'Usuario3',
    lastname: 'Lastname3',
    email: 'usuario3@gmail.com',
    phone: '666777888',
    identityCard: '8-7271-9501',
    bookingCoupons: []
  },
  {
    id: "4",
    name: 'Usuario4',
    lastname: 'Lastname4',
    email: 'usuario4@gmail.com',
    phone: '666777888',
    identityCard: '7-1043-9127',
    bookingCoupons: []
  },
  {
    id: "5",
    name: 'Usuario5',
    lastname: 'Lastname5',
    email: 'usuario5@gmail.com',
    phone: '666777888',
    identityCard: '2-6939-3426',
    bookingCoupons: []
  },
]
