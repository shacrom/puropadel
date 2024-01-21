import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../models/User';
import { CouponUsage } from '../../../../../models/CouponUsage';
import { BookingCoupon } from '../../../../../models/BookingCoupon';

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
  tableData: any[][] = [];

  ngOnInit() {
    this.hourColumnsToShow = Array(this.calculateMaxCouponHours()).fill(0).map((x,i) => i);
    this.buildaTable();
    console.log(this.tableData)
  }

  calculateRemainingHours() {
    if (this.user.bookingCoupons) {
      this.remianingHours = 0;
      this.user.bookingCoupons.forEach(bookingCoupon => {
        this.remianingHours = bookingCoupon.totalHours;

        bookingCoupon.couponUsages.forEach(couponUsage => {
          this.remianingHours -= couponUsage.hoursSpent;
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


  buildaTable() {
    if (this.user.bookingCoupons) {
      this.user.bookingCoupons.forEach(bookingCoupon => {
        let rowData = [];
        rowData.push(bookingCoupon.id,bookingCoupon.name, bookingCoupon.price, bookingCoupon.currency);
        bookingCoupon.couponUsages.forEach(couponUsage => {
          let date = this.formatDate(couponUsage.dateUsed);
          rowData.push(date);
        })
        
        while(rowData.length < (this.hourColumnsToShow.length+4)) {
          rowData.push("");
        }
        this.tableData.push(rowData);
      })
    }
    console.log(this.tableData);
  }

  formatDate(date: Date): string {
    return date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
  }

  showModal(data: any){
    this.handleAddDateModal.emit(data);
  }
}