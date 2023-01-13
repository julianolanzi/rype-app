import { Observable } from 'rxjs';
import { UserInfo } from './../../../../models/account/user-info';
import { UserInfoService } from './../../../../services/user-info.service';
import { Component } from '@angular/core';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent {
  id: string = '';
  isLoading: boolean = false;
  errors: any[] = [];
  url: string = '';
  public user: UserInfo | undefined;

  localStorageUtils = new LocalStorageUtils();
  constructor(private userService: UserInfoService) {
    this.isLoading = true;
    this.userData();
  }

  ngOnInit(): void {}
  userData() {
    this.isLoading = false;
    this.id = this.UserLocalInfo();

    this.userService.userInfo(this.id).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
        this.user = sucesso;
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
