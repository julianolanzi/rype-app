import { TeamService } from './../../../../services/team.service';
import { Component } from '@angular/core';
import { TeamInfo } from 'src/app/models/teams/team-info';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-basic-info-team',
  templateUrl: './basic-info-team.component.html',
  styleUrls: ['./basic-info-team.component.css'],
})
export class BasicInfoTeamComponent {
  errors: any[] = [];
  isLoading: boolean = false;
  id: string = '';
  Team!: TeamInfo;
  localStorageUtils = new LocalStorageUtils();
  isadmin: boolean = false;
  idTeam: string = '';
  isRemoveTeam: boolean = false;

  constructor(private teamService: TeamService) {
    this.isLoading = true;
    this.isadmin = false;
    this.isRemoveTeam = false;
    this.UserTeamInfo();
  }

  quitTeam() {
    this.idTeam = this.Team.data.id;

    this.teamService.quitTeam(this.idTeam).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
        this.isRemoveTeam = true;
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  UserTeamInfo() {
    this.isLoading = true;
    this.id = this.UserLocalInfo();

    this.teamService.getUserTeam(this.id).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);

        this.Team = sucesso;

        if (this.Team.data.role == 'admin') {
          this.isadmin = true;
        }
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  UserLocalInfo() {
    let user = this.localStorageUtils.obertUser();
    user = JSON.parse(user);
    this.id = user.id;
    return this.id;
  }

  processarSucesso(response: any) {
    this.isLoading = false;
    this.errors = [];
  }
  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }
}
