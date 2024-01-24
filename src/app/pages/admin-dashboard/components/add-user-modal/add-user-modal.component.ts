import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-add-user-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css'
})
export class AddUserModalComponent {

  @Output() handleAddUserModal = new EventEmitter<User>();
  newUserForm: FormGroup;


  constructor(private fb: FormBuilder) { 
    this.newUserForm = fb.group({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      identityCard: '',
    });
  }

  

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.newUserForm.value);
    
    this.handleAddUserModal.emit(this.newUserForm.value as User);
  }
}
