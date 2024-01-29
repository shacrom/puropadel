import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCouponComponent } from './assign-coupon.component';

describe('AssignCouponComponent', () => {
  let component: AssignCouponComponent;
  let fixture: ComponentFixture<AssignCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignCouponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
