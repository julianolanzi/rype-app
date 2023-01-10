import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamInfo } from 'src/app/models/teams/team-info';
import { EventService } from 'src/app/services/event.service';
import { TeamService } from 'src/app/services/team.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-mananger-member-team',
  templateUrl: './mananger-member-team.component.html',
  styleUrls: ['./mananger-member-team.component.css'],
})
export class ManangerMemberTeamComponent {
  isLoading: boolean = false;
  errors: any[] = [];
  Team!: TeamInfo;
  Users: any[] | undefined;
  searchForm!: FormGroup;
  userName: string = '';
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
    this.TeamService.updateMemberTeam(idTeam, user).subscribe(
      (sucesso) => {
        this.Users = sucesso;
        this.processarSucessoAddMember(sucesso);
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
        this.processarSucessoAddMember(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  removeMember(item: any){
    let idTeam = this.Team.data.id;
    let idUser = {
      member: item._id,
    };

    this.TeamService.quitMember(idTeam, idUser).subscribe(
      (sucesso) => {
        this.Users = sucesso;
        this.processarSucessoAddMember(sucesso);
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
  processarSucessoAddMember(response: any) {
    this.isLoading = false;
    this.errors = [];
    window.location.reload();
  }

}
