import { TestBed } from '@angular/core/testing';

import { BookingCouponsService } from './booking-coupons.service';

describe('BookingCouponsService', () => {
  let service: BookingCouponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingCouponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
