import { TeamService } from 'src/app/services/team.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisrTeam } from 'src/app/models/teams/team-register';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css'],
})
export class RegisterTeamComponent {
  isRegister: boolean = false;
  isSearchTeam: boolean = false;
  isRegisterSucess: boolean = false;
  isLoading: boolean = false;
  cadastroTeamForm!: FormGroup;
  team!: RegisrTeam;
  errors: any[] = [];
  id: string = '';
  url!: string;

  localStorageUtils = new LocalStorageUtils();

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cadastroTeamForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      tagName: new FormControl('', [Validators.required]),
      instagramTeam: new FormControl(''),
      discordTeam: new FormControl(''),
      emailTeam: new FormControl(''),
      facebookTeam: new FormControl(''),
      youtubeTeam: new FormControl(''),
      description: new FormControl(''),
      private: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.cadastroTeamForm.get('name')!;
  }
  get tagName() {
    return this.cadastroTeamForm.get('tagName')!;
  }
  get private() {
    return this.cadastroTeamForm.get('private')!;
  }

  addTeam() {
    if (this.cadastroTeamForm.invalid) {
      return;
    }
    this.team = Object.assign({}, this.team, this.cadastroTeamForm.value);
    this.id = this.UserLocalInfo();
    this.url = this.imgTeam();

    this.team = {
      ...this.team,
      admin: this.id,
      url: this.url,
      name: this.team.name.toLowerCase(),
    };

    this.teamService.cadastroTeam(this.team).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
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
    this.isRegisterSucess = true;
    this.errors = [];
    window.location.reload();
  }

  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }
  optionUser(data: string) {
    if (data == 'register') {
      this.isRegister = true;
      this.isSearchTeam = false;
    }

    if (data == 'search') {
      this.isRegister = false;
      this.isSearchTeam = true;
    }
  }

  imgTeam() {
    const path = 'https://rype-app.vercel.app';
    var img = '/assets/img/avatars/team/logo-team.jpg';
   
    let url = path + '/' + img
    return url;
  }
}
