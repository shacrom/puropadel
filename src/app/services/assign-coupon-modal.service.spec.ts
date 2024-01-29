import { TestBed } from '@angular/core/testing';

import { AssignCouponModalService } from './assign-coupon-modal.service';

describe('AssignCouponModalService', () => {
  let service: AssignCouponModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignCouponModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
