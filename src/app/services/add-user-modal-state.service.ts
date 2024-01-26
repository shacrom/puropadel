import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserModalStateService {

  private showModalSubject = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSubject.asObservable();
  
  setShowModal(value: boolean) {
    this.showModalSubject.next(value);
  }
}
