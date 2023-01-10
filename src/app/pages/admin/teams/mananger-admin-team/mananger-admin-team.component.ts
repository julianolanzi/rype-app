import { UserInfo } from './../../../../models/account/user-info';
import { Component } from '@angular/core';
import { TeamInfo } from 'src/app/models/teams/team-info';
import { EventService } from 'src/app/services/event.service';
import { TeamService } from 'src/app/services/team.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-mananger-admin-team',
  templateUrl: './mananger-admin-team.component.html',
  styleUrls: ['./mananger-admin-team.component.css'],
})
export class ManangerAdminTeamComponent {
  isLoading: boolean = false;
  errors: any[] = [];
  Team!: TeamInfo;
  searchForm!: FormGroup;
  userName: string = '';

  Users: any[] | undefined;
  constructor(
    private TeamEventService: EventService,
    private TeamService: TeamService,
    private UserService: UserInfoService
  ) {
    this.Users = [];
    this.searchForm = new FormGroup({
      key: new FormControl('', [Validators.required]),
    });
  }

  get key() {
    return this.searchForm.get('key')!;
  }

  ngOnInit(): void {
    this.TeamEventService.EmitInfo.subscribe((response) => {
      this.Team = response;
    });
  }

  searchUsers() {
    this.Users = [];
    if (this.searchForm.invalid) {
      return;
    }
    this.userName = this.searchForm.value.key;

    this.UserService.searchByUserKey(this.userName).subscribe(
      (sucesso) => {
        this.Users = sucesso;
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  addUserTeam(item: any) {
    let idTeam = this.Team.data.id;
    let user = {
      member: item._id,
    };
    this.TeamService.updateAdminMember(idTeam, user).subscribe(
      (sucesso) => {
        this.Users = sucesso;
        this.processarSucessoAddAdmin(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  removeAdm(item: any){
    let idTeam = this.Team.data.id;
    let idUser = {
      member: item._id,
    };

    this.TeamService.quitMember(idTeam, idUser).subscribe(
      (sucesso) => {
        this.Users = sucesso;
        this.processarSucessoAddAdmin(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  updateRole(item: any){
    let idTeam = this.Team.data.id;
    let idUser = {
      member: item._id,
    };
    this.TeamService.updateRole(idTeam, idUser).subscribe(
      (sucesso) => {
        this.Users = sucesso;
        this.processarSucessoAddAdmin(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  processarSucesso(response: any) {
    this.isLoading = false;
    this.errors = [];
  }
  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }

  processarSucessoAddAdmin(response: any) {
    this.isLoading = false;
    this.errors = [];
    window.location.reload();
  }

  
}
