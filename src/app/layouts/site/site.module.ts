import { LoadingComponent } from './../../pages/site/loading/loading.component';

import { HomeComponent } from 'src/app/pages/site/home/home.component';
import { ResetPasswordComponent } from './../../pages/site/reset-password/reset-password.component';
import { RecoveryPasswordComponent } from './../../pages/site/recovery-password/recovery-password.component';
import { RegisterComponent } from './../../pages/site/register/register.component';
import { AuthComponent } from 'src/app/pages/site/auth/auth.component';

import { SiteRoutes } from './site.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { TermsComponent } from 'src/app/pages/site/terms/terms.component';
import { ContactComponent } from 'src/app/pages/site/contact/contact.component';
import { LoadingModule } from 'src/app/pages/site/loading/loading.module';
import {
    NgxMaskDirective,
    NgxMaskPipe,
    provideNgxMask,
    IConfig,
  } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    SiteComponent,
    AuthComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    TermsComponent,
    ContactComponent,
  ],
  providers: [RegisterService, provideNgxMask()],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
})
export class SiteModule {}
