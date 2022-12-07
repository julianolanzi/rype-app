import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const SiteRoutes: Routes = [
    { path: '',          component: HomeComponent },
    { path: 'home',          component: HomeComponent },
];
