import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddCouponModalService } from '../../../../services/add-coupon-modal.service';

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

  constructor(private fb: FormBuilder, private addCouponModalService: AddCouponModalService){

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

  onSubmit(){

  }
}
