import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { UserUpdate } from 'src/app/models/account/user-update';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/account/user-info';
import { EventService } from 'src/app/services/event.service';
import { DatePipe } from '@angular/common';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { UploadImgService } from 'src/app/services/upload.img.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  updateForm!: FormGroup;
  deletAcount!: FormGroup;
  errors: any[] = [];
  user!: UserUpdate;
  isLoading: boolean = false;
  niverDate: any;
  userProfile: UserInfo | undefined;
  isChangeSucess: boolean = false;
  id: string = '';
  localStorageUtils = new LocalStorageUtils();
  url: any;
  isChangeProfile: boolean = false;

  file!: File;

  constructor(
    private userService: UserInfoService,
    private router: Router,
    private UserInfoService: EventService,
    private datePipe: DatePipe,
    private uploadService: UploadImgService
  ) {
    this.isLoading = false;
    this.isChangeProfile = false;

    this.updateForm = new FormGroup({
      nickname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      url: new FormControl(''),
      gender: new FormControl(''),
      country: new FormControl(''),
      birthday: new FormControl(''),
      email: new FormControl(''),
    });

    this.deletAcount = new FormGroup({
      confirmation: new FormControl('', [
        Validators.required,
        Validators.pattern('true'),
      ]),
    });
  }
  get confirmation() {
    return this.updateForm.get('confirmation')!;
  }

  get nickname() {
    return this.updateForm.get('nickname')?.value;
  }
  get name() {
    return this.updateForm.get('name')!;
  }
  get lastname() {
    return this.updateForm.get('lastname')!;
  }
  get gender() {
    return this.updateForm.get('gender')!;
  }
  get birthday() {
    return this.updateForm.get('birthday')!;
  }
  get phone() {
    return this.updateForm.get('phone')!;
  }
  get email() {
    return this.updateForm.get('email')!;
  }
  get country() {
    return this.updateForm.get('country')!;
  }

  ngOnInit(): void {
    this.UserInfoService.EmitUserInfo.subscribe((response) => {
      this.userProfile = response;

      this.url = this.userProfile?.url;

      this.updateForm.patchValue({
        nickname: this.userProfile?.nickname,
        name: this.userProfile?.name,
        lastname: this.userProfile?.lastname,
        gender: this.userProfile?.gender,
        birthday: this.datePipe.transform(
          this.userProfile?.birthday,
          'yyyy-MM-dd',
          'UTC',
          'pt-BR'
        ),
        phone: this.userProfile?.phone,
        email: this.userProfile?.email,
        country: this.userProfile?.country,
        url: this.url,
      });
    });
  }

  updateProfile() {
    if (this.updateForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.user, this.updateForm.value);
    this.id = this.UserLocalInfo();
    this.isLoading = true;

    this.userService.updateUser(this.user, this.id).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  delete() {
    if (this.deletAcount.invalid) {
      return;
    }
    this.id = this.UserLocalInfo();
    this.userService.deleteAcount(this.id).subscribe(
      (sucesso) => {
        this.processarSucessoDelete(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  processarSucesso(response: any) {
    this.isChangeProfile = true;
    this.isLoading = false;
    this.isChangeSucess = true;
    this.errors = [];

    setTimeout(() => {
      this.router.navigate(['/overview']);
    }, 2000);
  }

  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }

  UserLocalInfo() {
    let user = this.localStorageUtils.obertUser();
    user = JSON.parse(user);
    this.id = user.id;
    return this.id;
  }

  processarSucessoDelete(response: any) {
    this.isLoading = false;
    this.isChangeSucess = true;
    this.errors = [];
    this.localStorageUtils.limparDadosLocaisUsuario();

    setTimeout(() => {
      this.router.navigate(['auth']);
    }, 2000);
  }

  onselectFile(e: any) {
    if (e.target.files) {
      this.file = e.srcElement.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  changeImg() {
    this.id = this.UserLocalInfo();

    this.uploadService.uploadImgUser(this.id, this.file).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
        this.user = sucesso;
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }
}
