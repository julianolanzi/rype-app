import { LocalStorageUtils } from './../../utils/localstorage';
import { CommingSoonComponent } from './../../pages/site/comming-soon/comming-soon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from 'src/app/pages/site/loading/loading.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    CommingSoonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    
  ],
  providers: [
    LocalStorageUtils
  ]
})
export class AdminLayoutModule { }
