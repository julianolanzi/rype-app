import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { UserInfoService } from 'src/app/services/user-info.service';
import { LocalStorageUtils } from 'src/app/utils/localstorage';


import { UserChangePass } from 'src/app/models/account/user-change-pass';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
})
export class SecurityComponent {
  updatePass!: FormGroup;
  localStorageUtils = new LocalStorageUtils();
  user!: UserChangePass;

  errors: any[] = [];

  data!: any;

  isLoading: boolean = false;
  isChangeSucess: boolean = false;

  constructor(
    private userService: UserInfoService, 
    private router: Router
    ) {
    this.updatePass = new FormGroup({
      password: new FormControl('', [Validators.required]),
      newpassword: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
    });
  }

  get password() {
    return this.updatePass.get('password')!;
  }
  get newpassword() {
    return this.updatePass.get('newpassword')!;
  }
  get confirmpassword() {
    return this.updatePass.get('confirmpassword')!;
  }

  changePass() {
    if (this.updatePass.invalid) {
      return;
    }

    let localData = this.userLocalInfo();

    this.data = Object.assign({}, this.data, this.updatePass.value);
    this.isLoading = true;
    this.data = {
      password: this.data.password,
      newpassword: this.data.newpassword,
      email: localData.email,
      confirmpassword: this.data.confirmpassword,
    };

    this.userService.chagePassword(this.data, localData.id).subscribe(
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
      this.router.navigate(['/auth']);
    }, 2000);
  }

  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }

  userLocalInfo() {
    let user = this.localStorageUtils.obertUser();
    user = JSON.parse(user);

    let localData = {
      email: user.email,
      id: user.id,
    };
    return localData;
  }
}
