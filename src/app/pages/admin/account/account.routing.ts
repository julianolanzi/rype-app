import { SecurityComponent } from './security/security.component';
import { SettingsComponent } from './settings/settings.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { OverviewComponent } from './overview/overview.component';

import { Routes } from '@angular/router';

export const AccountRoutes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'myteam', component: MyTeamComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'security', component: SecurityComponent },
];
