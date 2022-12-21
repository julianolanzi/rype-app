import { OverviewComponent } from './overview/overview.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { AccountRoutes } from './account.routing';
import { SettingsComponent } from './settings/settings.component';
import { SecurityComponent } from './security/security.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { UserInfoService } from 'src/app/services/user-info.service';
import { LoadingModule } from '../../site/loading/loading.module';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
  IConfig,
} from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    OverviewComponent,
    SettingsComponent,
    SecurityComponent,
    MyTeamComponent,
    BasicInfoComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(AccountRoutes),
    HttpClientModule,
    LoadingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LocalStorageUtils, UserInfoService, provideNgxMask()],
})
export class AccountModule {}
