import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddCouponModalService } from '../../../../services/add-coupon-modal.service';
import { BookingCouponsService } from '../../../../services/booking-coupons.service';

@Component({
  selector: 'app-add-coupon-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-coupon-modal.component.html',
  styleUrl: './add-coupon-modal.component.css'
})
export class AddCouponModalComponent {

  newCouponForm: FormGroup;
  showModal: boolean = false;

  constructor(private fb: FormBuilder, private addCouponModalService: AddCouponModalService, private bookingCouponsService: BookingCouponsService){

    this.addCouponModalService.showModal$.subscribe(show => {
      this.showModal = show;
    });

    this.newCouponForm = fb.group({
      name: '',
      price: '',
      currency: '',
      totalHours: '',
    });
  }

  onSubmit(event: Event){
    event.preventDefault();
    let aux = this.bookingCouponsService.getBookingCoupons();
    aux.push(this.newCouponForm.value);
    this.bookingCouponsService.setBookingCoupons(aux);
    this.addCouponModalService.setShowModal(false);
  }

  onCancel(){
    this.addCouponModalService.setShowModal(false);
  }
}
