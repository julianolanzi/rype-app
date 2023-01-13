import { AuthGuard } from './../../guards/auth.guard';
import { BuildComponent } from './../../pages/admin/build/build.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/admin/home/home.component';

export const AdminLayoutRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'breve', component: BuildComponent, canActivate: [AuthGuard] },
];
