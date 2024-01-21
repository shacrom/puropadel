import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CouponUsage } from '../../../../models/CouponUsage';
import { formatDate } from '../../../../shared/formatDate';

@Component({
  selector: 'app-add-date-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-date-modal.component.html',
  styleUrl: './add-date-modal.component.css'
})
export class AddDateModalComponent implements OnInit {

  @Input() bookingCoupon: string[] = [];
  @Output() handleAddDateModal = new EventEmitter<void>();

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
    let index = this.bookingCoupon.findIndex(field => field === "");    
    this.bookingCoupon[index] = formatDate(new Date(this.couponUsageForm.get('dateUsed')?.value));
    this.handleAddDateModal.emit();
  }

  closeModal() {
    this.handleAddDateModal.emit();
  }
}
