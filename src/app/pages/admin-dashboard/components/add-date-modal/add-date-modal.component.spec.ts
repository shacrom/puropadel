import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateModalComponent } from './add-date-modal.component';

describe('AddDateModalComponent', () => {
  let component: AddDateModalComponent;
  let fixture: ComponentFixture<AddDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
