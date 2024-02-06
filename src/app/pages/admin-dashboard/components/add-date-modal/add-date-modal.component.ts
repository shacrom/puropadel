import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CouponUsage } from '../../../../models/CouponUsage';
import { BookingCoupon } from '../../../../models/BookingCoupon';

@Component({
  selector: 'app-add-date-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-date-modal.component.html',
  styleUrl: './add-date-modal.component.css'
})
export class AddDateModalComponent implements OnInit {

  @Input() couponToModify!: BookingCoupon;
  @Output() addDate = new EventEmitter<BookingCoupon>();
  @Output() closeModal = new EventEmitter<void>();
  couponUsageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.couponUsageForm = this.fb.group({});
  }

  ngOnInit() {
    const actualDate = new Date().toISOString().split('T')[0];
    this.couponUsageForm = this.fb.group({
      dateUsed: actualDate,
      hoursSpent: "1",
    });
  }

  onSubmit() {
    if(!this.couponToModify.couponUsages){
      this.couponToModify.couponUsages = [] as CouponUsage[];
    }    

    let auxBookingCoupon = this.couponToModify;
    let auxCouponUsage: CouponUsage = {
      dateUsed: new Date(this.couponUsageForm.get("dateUsed")?.value),
      hoursSpent: parseFloat(this.couponUsageForm.get("hoursSpent")?.value),
    }
    let bookingCouponToModifyIndex = this.couponToModify.couponUsages.findIndex(coupon => coupon.dateUsed === undefined);
    if(auxBookingCoupon.couponUsages){
      auxBookingCoupon.couponUsages[bookingCouponToModifyIndex] = auxCouponUsage;
      this.addDate.emit(auxBookingCoupon);
    }
  }

  onCancel(){
    this.closeModal.emit();
  }
}
