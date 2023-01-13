import { ManangerMemberTeamComponent } from './mananger-member-team/mananger-member-team.component';
import { ManangerAdminTeamComponent } from './mananger-admin-team/mananger-admin-team.component';
import { SettingsTeamComponent } from './settings-team/settings-team.component';
import { OverviewTeamComponent } from './overview-team/overview-team.component';

import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const TeamsRoutes: Routes = [
  {
    path: 'overview-team',
    component: OverviewTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings-team',
    component: SettingsTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-members',
    component: ManangerAdminTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'members',
    component: ManangerMemberTeamComponent,
    canActivate: [AuthGuard],
  },
];
