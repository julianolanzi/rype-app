import { SecurityComponent } from './security/security.component';
import { SettingsComponent } from './settings/settings.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { OverviewComponent } from './overview/overview.component';

import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const AccountRoutes: Routes = [
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'myteam', component: MyTeamComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'security', component: SecurityComponent, canActivate: [AuthGuard] },
];
