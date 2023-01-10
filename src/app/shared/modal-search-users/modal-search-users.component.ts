import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-search-users',
  templateUrl: './modal-search-users.component.html',
  styleUrls: ['./modal-search-users.component.css']
})
export class ModalSearchUsersComponent {
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
