import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-upload-profile-img',
  templateUrl: './modal-upload-profile-img.component.html',
  styleUrls: ['./modal-upload-profile-img.component.css']
})
export class ModalUploadProfileImgComponent {
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
