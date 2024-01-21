import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsUserTableComponent } from './coupons-user-table.component';

describe('CouponsUserTableComponent', () => {
  let component: CouponsUserTableComponent;
  let fixture: ComponentFixture<CouponsUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponsUserTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponsUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
