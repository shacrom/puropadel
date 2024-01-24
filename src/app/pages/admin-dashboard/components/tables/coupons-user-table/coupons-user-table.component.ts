import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../models/User';
import { BookingCoupon } from '../../../../../models/BookingCoupon';
import { CouponUsage } from '../../../../../models/CouponUsage';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MOCKS_USERS } from '../../../../../data/UsersMock';
import { AddDateModalComponent } from '../../add-date-modal/add-date-modal.component';

@Component({
  selector: 'app-coupons-user-table',
  standalone: true,
  imports: [AddDateModalComponent],
  templateUrl: './coupons-user-table.component.html',
  styleUrl: './coupons-user-table.component.css'
})
export class CouponsUserTableComponent {
  user!: User;
  @Output() handleAddDateModal = new EventEmitter<BookingCoupon>();
  remianingHours: number = 0;
  hourColumnsToShow: number[] = [];
  tableData: BookingCoupon[] = [];
  users = MOCKS_USERS;
  showModal = false;
  couponToModify!: BookingCoupon;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = MOCKS_USERS.find(user => user.id == params.get('id')) as User;

    });
    this.hourColumnsToShow = Array(this.calculateMaxCouponHours()).fill(0).map((x, i) => i);
    this.buildTable();
  }

  calculateRemainingHours() {
    if (this.user.bookingCoupons) {
      this.remianingHours = 0;
      this.user.bookingCoupons.forEach(bookingCoupon => {
        this.remianingHours = bookingCoupon.totalHours;

        bookingCoupon.couponUsages?.forEach(couponUsage => {
          if (couponUsage.hoursSpent) {
            this.remianingHours -= couponUsage.hoursSpent;
          }
        })
        return this.remianingHours;
      });
    }
  }

  calculateMaxCouponHours() {
    let maxColumQuantity: number = 0;
    if (this.user.bookingCoupons) {
      this.user.bookingCoupons.forEach(bookingCoupon => {
        if (bookingCoupon.couponUsages!.length > maxColumQuantity) {
          maxColumQuantity = bookingCoupon.totalHours;
        }
      })

    }
    return maxColumQuantity;
  }

  buildTable() {
    if (this.user.bookingCoupons) {
      this.user.bookingCoupons.forEach(bookingCoupon => {
        let couponUsagesAux: CouponUsage[] = [];

        bookingCoupon.couponUsages?.forEach(couponUsage => {

          if (couponUsage.dateUsed) {
            couponUsagesAux.push({
              dateUsed: new Date(this.formatDate(couponUsage.dateUsed)),
              hoursSpent: couponUsage.hoursSpent,
            });
          }

        });

        while (couponUsagesAux.length < this.hourColumnsToShow.length) {
          couponUsagesAux.push({});
        }

        let bookingCouponAux: BookingCoupon = {
          id: bookingCoupon.id,
          name: bookingCoupon.name,
          price: bookingCoupon.price,
          currency: bookingCoupon.currency,
          totalHours: bookingCoupon.totalHours,
          couponUsages: couponUsagesAux,
        }
        this.tableData.push(bookingCouponAux);
      })
    }
  }

  formatDate(date: Date): string {
    return date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
  }

  onAddDate(data: BookingCoupon) {
    this.showModal = !this.showModal;
    this.couponToModify = data;
  }
}