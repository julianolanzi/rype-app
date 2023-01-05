import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { TeamsSearch } from 'src/app/models/teams/search-teams';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css'],
})
export class SearchTeamComponent {
  isLoading: boolean = false;
  errors: any[] = [];
  searchForm!: FormGroup;
  teamName: string = '';
  isSerachNotFound: boolean = false;
  isJoinSucess: boolean =false;

  idUser: string = '';
  idTeam: string = '';

  Teams: any[] | undefined;
  localStorageUtils = new LocalStorageUtils();

  constructor(private teamService: TeamService) {
    this.searchForm = new FormGroup({
      key: new FormControl('', [Validators.required]),
    });
  }

  get key() {
    return this.searchForm.get('key')!;
  }

  searchTeam() {
    this.Teams = [];
    if (this.searchForm.invalid) {
      return;
    }
    this.teamName = this.searchForm.value.key;

    this.teamService.searchTeams(this.teamName).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }
  processarSucesso(response: any) {
    this.Teams = response;
    this.isLoading = false;
    this.errors = [];
  }
  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }

  requestTeam(item: any) {
    this.idUser = this.UserLocalInfo();
    this.idTeam = item._id;

    const data = {
      user: this.idUser,
      team: this.idTeam,
    }

    this.teamService.joinTeamPublic(data).subscribe(
      (sucesso) => {
        this.processarSucessoJoinTeam(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  processarSucessoJoinTeam(response: any) {
    this.isJoinSucess = true;
    this.isLoading = false;
    this.errors = [];

    window.location.reload();
  }

  UserLocalInfo() {
    let user = this.localStorageUtils.obertUser();
    user = JSON.parse(user);
    this.idUser = user.id;
    return this.idUser;
  }
}
