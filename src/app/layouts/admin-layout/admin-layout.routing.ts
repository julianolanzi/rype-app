import { BuildComponent } from './../../pages/admin/build/build.component';
import { TeamsComponent } from './../../pages/admin/teams/teams.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/admin/home/home.component';

export const AdminLayoutRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'team', component: TeamsComponent },
  { path: 'breve', component: BuildComponent },
];
