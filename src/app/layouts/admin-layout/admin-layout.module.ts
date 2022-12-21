import { AccountModule } from './../../pages/admin/account/account.module';
import { LocalStorageUtils } from './../../utils/localstorage';
import { CommingSoonComponent } from './../../pages/site/comming-soon/comming-soon.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from 'src/app/pages/admin/home/home.component';
import { TeamsComponent } from 'src/app/pages/admin/teams/teams.component';
import { ComponetsModule } from '../../components/componets.module';
import { BuildComponent } from 'src/app/pages/admin/build/build.component';
import { EventService } from 'src/app/services/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'src/app/pages/site/loading/loading.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CommingSoonComponent,
    HomeComponent,
    TeamsComponent,
    BuildComponent,
  ],
  providers: [LocalStorageUtils, EventService, DatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    ComponetsModule,
    AccountModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
  ],
})
export class AdminLayoutModule {}
