import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user!: any;

  email: string = '';
  nickName: string = '';
  url: string = '';

  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) {}
  ngOnInit(): void {
  


    this.dataUser();
  }

  loginExit() {
    this.localStorageUtils.limparDadosLocaisUsuario();
    this.router.navigate(['auth']);
  }

  dataUser() {
    this.user = this.localStorageUtils.obertUser();
    this.user = JSON.parse(this.user);
    this.url = this.user.url;
    this.nickName = this.user.nickname
  }
}
