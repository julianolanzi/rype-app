import { Routes } from '@angular/router';

import { ResetPasswordComponent } from './../../pages/site/reset-password/reset-password.component';
import { RegisterComponent } from './../../pages/site/register/register.component';
import { RecoveryPasswordComponent } from './../../pages/site/recovery-password/recovery-password.component';
import { AuthComponent } from 'src/app/pages/site/auth/auth.component';
import { HomeComponent } from 'src/app/pages/site/home/home.component';

export const SiteRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'recovery-password', component: RecoveryPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
];
