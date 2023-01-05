import { ManangerMemberTeamComponent } from './mananger-member-team/mananger-member-team.component';
import { ManangerAdminTeamComponent } from './mananger-admin-team/mananger-admin-team.component';
import { SettingsTeamComponent } from './settings-team/settings-team.component';
import { OverviewTeamComponent } from './overview-team/overview-team.component';


import { Routes } from '@angular/router';

export const TeamsRoutes: Routes = [
  { path: 'overview-team', component:  OverviewTeamComponent},
  { path: 'settings-team', component:  SettingsTeamComponent},
  { path: 'admin-members', component:  ManangerAdminTeamComponent},
  { path: 'members', component:  ManangerMemberTeamComponent},
];
