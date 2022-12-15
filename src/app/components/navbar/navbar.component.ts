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
    let toogle = document.getElementById('toggleMobile') as HTMLElement;
    let sidebar = document.querySelector('.app-sidebar') as HTMLElement;
    let menumobile = document.getElementById('mobileCLOSE') as HTMLElement;
    toogle.addEventListener('click', () => {
      sidebar.classList.toggle('drawer');
      sidebar.classList.toggle('drawer-start');
      sidebar.classList.toggle('drawer-on');
      menumobile.classList.toggle('hidemenu');
    });

    menumobile.addEventListener('click', () => {
      sidebar.classList.toggle('drawer');
      sidebar.classList.toggle('drawer-start');
      sidebar.classList.toggle('drawer-on');
      menumobile.classList.add('hide');
    });

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
