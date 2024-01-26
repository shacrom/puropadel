import { TestBed } from '@angular/core/testing';

import { AddUserModalStateService } from './add-user-modal-state.service';

describe('AddUserModalStateService', () => {
  let service: AddUserModalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserModalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
