import { TestBed } from '@angular/core/testing';

import { AddCouponModalService } from './add-coupon-modal.service';

describe('AddCouponModalService', () => {
  let service: AddCouponModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCouponModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
