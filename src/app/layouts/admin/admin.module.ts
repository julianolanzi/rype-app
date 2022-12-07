
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routing';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [
  
  ]
})
export class AdminModule { }