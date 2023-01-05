import { Component } from '@angular/core';
import { TeamInfo } from 'src/app/models/teams/team-info';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-overview-team',
  templateUrl: './overview-team.component.html',
  styleUrls: ['./overview-team.component.css'],
})
export class OverviewTeamComponent {
  Team!: TeamInfo;
  adminTeam: any;
  isMemberTeam: boolean = false;

  constructor(private TeamService: EventService) {
  }

  ngOnInit(): void {
    this.TeamService.EmitInfo.subscribe((response) => {

      this.Team = response;
      
      
      });
      

  }
}
