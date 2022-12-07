import { HomeComponent } from './../../pages/home/home.component';
import { SiteRoutes } from './site.routing';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes),
  ],
  declarations: [
    HomeComponent
  ]
})
export class SiteModule { }