import { TeamService } from 'src/app/services/team.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { EventService } from 'src/app/services/event.service';
import { UpdateTeamInfo } from 'src/app/models/teams/team-register copy';
import { TeamInfo } from 'src/app/models/teams/team-info';
import { Router } from '@angular/router';
import { UploadImgService } from 'src/app/services/upload.img.service';

@Component({
  selector: 'app-settings-team',
  templateUrl: './settings-team.component.html',
  styleUrls: ['./settings-team.component.css'],
})
export class SettingsTeamComponent {
  updateTeamForm!: FormGroup;
  errors: any[] = [];
  isLoading: boolean = false;
  isChangeSucess: boolean = false;
  id: string = '';
  localStorageUtils = new LocalStorageUtils();
  upTeam!: UpdateTeamInfo;
  Team!: TeamInfo;
  url: string = '';
  isprivate: string = '';
  isChangeProfile: boolean = false;
  file!: File;

  isChangeImg: boolean = false;
  constructor(
    private TeamEventService: EventService,
    private TeamService: TeamService,
    private router: Router,
    private uploadService: UploadImgService
  ) {
    this.isLoading = false;
    this.isChangeSucess = false;
    this.isChangeProfile = false;
    this.isChangeImg = false;

    this.updateTeamForm = new FormGroup({
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
    return this.updateTeamForm.get('name')!;
  }
  get tagName() {
    return this.updateTeamForm.get('tagName')!;
  }
  get private() {
    return this.updateTeamForm.get('private')!;
  }

  ngOnInit(): void {
    this.TeamEventService.EmitInfo.subscribe((response) => {
      this.Team = response;
      this.id = this.Team.data.id;

      this.url = this.Team.dataTeam.url;
      this.isprivate = this.Team.dataTeam.private.toString();
      this.updateTeamForm.patchValue({
        name: this.Team.dataTeam.name,
        tagName: this.Team.dataTeam.tagName,
        instagramTeam: this.Team.dataTeam.instagramTeam,
        discordTeam: this.Team.dataTeam.discordTeam,
        emailTeam: this.Team.dataTeam.emailTeam,
        facebookTeam: this.Team.dataTeam.facebookTeam,
        youtubeTeam: this.Team.dataTeam.youtubeTeam,
        description: this.Team.dataTeam.description,
        private: this.isprivate,
        url: this.url,
      });
    });
  }

  updateTeam() {
    this.isLoading = true;
    if (this.updateTeamForm.invalid) {
      return;
    }

    this.upTeam = Object.assign({}, this.upTeam, this.updateTeamForm.value);

    this.TeamService.updateInfoTeam(this.upTeam, this.id).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  processarSucesso(response: any) {
    this.isLoading = false;
    this.isChangeSucess = true;
    this.errors = [];

    setTimeout(() => {
      this.router.navigate(['/overview-team']);
    }, 2000);
  }
  processarSucessoImg(response: any) {
    this.isLoading = false;
    this.isChangeProfile = true;
    this.errors = [];
  }

  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }
  onselectFile(e: any) {
    if (e.target.files) {
      this.file = e.srcElement.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.isChangeImg = true;
      };
    }
  }

  changeImg() {
    this.uploadService.uploadImgTeam(this.id, this.file).subscribe(
      (sucesso) => {
        this.processarSucessoImg(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }
}
