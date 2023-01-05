import { BuildComponent } from './../../pages/admin/build/build.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/admin/home/home.component';

export const AdminLayoutRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'breve', component: BuildComponent },
];
