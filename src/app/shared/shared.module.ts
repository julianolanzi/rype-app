import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadProfileImgComponent } from './modal-upload-profile-img/modal-upload-profile-img.component';
import { ModalSearchUsersComponent } from './modal-search-users/modal-search-users.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModalUploadProfileImgComponent,
    ModalSearchUsersComponent,
  ],
  exports: [
    ModalUploadProfileImgComponent,
    ModalSearchUsersComponent,

  ]
})
export class SharedModule { }
