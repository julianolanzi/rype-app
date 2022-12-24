import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadTeamImgComponent } from './modal-upload-team-img/modal-upload-team-img.component';
import { ModalUploadProfileImgComponent } from './modal-upload-profile-img/modal-upload-profile-img.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModalUploadTeamImgComponent,
    ModalUploadProfileImgComponent,
  ],
  exports: [
    ModalUploadTeamImgComponent,
    ModalUploadProfileImgComponent,
  ]
})
export class SharedModule { }
