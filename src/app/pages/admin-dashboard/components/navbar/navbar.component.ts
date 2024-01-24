import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() showAddUserModal = new EventEmitter<void>();


  onShowAddUserModal(){
    this.showAddUserModal.emit();
  }
}
