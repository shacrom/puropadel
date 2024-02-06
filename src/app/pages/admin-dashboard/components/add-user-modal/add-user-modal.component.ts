import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../models/User';
import { AddUserModalStateService } from '../../../../services/add-user-modal-state.service';
import { UsersService } from '../../../../services/users.service';

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
  showModal: boolean = false;

  constructor(private fb: FormBuilder, private addUserModalService: AddUserModalStateService, private usersService: UsersService) {

    this.addUserModalService.showModal$.subscribe(show => {
      this.showModal = show;
    });

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
    let aux = this.usersService.getUsers();
    aux.push(this.newUserForm.value);
    this.usersService.setUsers(aux);
    this.addUserModalService.setShowModal(false);
  }

  onCancel(){
    this.addUserModalService.setShowModal(false);
  }
}
