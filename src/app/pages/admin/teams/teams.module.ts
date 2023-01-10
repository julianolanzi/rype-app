import { EventService } from 'src/app/services/event.service';
import { TeamsRoutes } from './teams.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTeamComponent } from './overview-team/overview-team.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from '../../site/loading/loading.module';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { UserInfoService } from 'src/app/services/user-info.service';
import { UploadImgService } from 'src/app/services/upload.img.service';
import { BasicInfoTeamComponent } from './basic-info-team/basic-info-team.component';
import { TeamService } from 'src/app/services/team.service';
import { SearchTeamComponent } from './search-team/search-team.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { SettingsTeamComponent } from './settings-team/settings-team.component';
import { ManangerMemberTeamComponent } from './mananger-member-team/mananger-member-team.component';
import { ManangerAdminTeamComponent } from './mananger-admin-team/mananger-admin-team.component';
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;



@NgModule({
  declarations: [
    OverviewTeamComponent,
    BasicInfoTeamComponent,
    SearchTeamComponent,
    RegisterTeamComponent,
    SettingsTeamComponent,
    ManangerMemberTeamComponent,
    ManangerAdminTeamComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TeamsRoutes),
    HttpClientModule,
    LoadingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    LocalStorageUtils,
    UserInfoService,
    UploadImgService,
    TeamService,
    EventService,
    provideNgxMask(),
  ],
})
export class TeamsModule { }
