import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../models/User';
import { BookingCoupon } from '../../../../../models/BookingCoupon';
import { CouponUsage } from '../../../../../models/CouponUsage';

@Component({
  selector: 'app-coupons-user-table',
  standalone: true,
  imports: [],
  templateUrl: './coupons-user-table.component.html',
  styleUrl: './coupons-user-table.component.css'
})
export class CouponsUserTableComponent {
  @Input() user!: User;
  @Output() handleAddDateModal = new EventEmitter<void>();
  remianingHours: number = 0;
  hourColumnsToShow: number[] = [];
  tableData: BookingCoupon[] = [];
  ngOnInit() {
    this.hourColumnsToShow = Array(this.calculateMaxCouponHours()).fill(0).map((x, i) => i);
    this.buildTable();
  }

  calculateRemainingHours() {
    if (this.user.bookingCoupons) {
      this.remianingHours = 0;
      this.user.bookingCoupons.forEach(bookingCoupon => {
        this.remianingHours = bookingCoupon.totalHours;

        bookingCoupon.couponUsages.forEach(couponUsage => {
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
        if (bookingCoupon.couponUsages.length > maxColumQuantity) {
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

        bookingCoupon.couponUsages.forEach(couponUsage => {

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
    console.log(this.tableData);
  }

  formatDate(date: Date): string {
    return date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
  }

  showModal(data: any) {
    this.handleAddDateModal.emit(data);
  }
}