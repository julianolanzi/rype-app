import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.css']
})
export class CommingSoonComponent {
  
  user!: any;
  email: string = "";
  nickName: string = "";

  localStorageUtils = new LocalStorageUtils();
  constructor(private router: Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userLogin();
  }

  userLogin(){
    this.user = this.localStorageUtils.obertUser();

    this.user = JSON.parse(this.user);
    this.nickName = this.user.nickname;
    this.email = this.user.email;

  }

  loginExit(){
    this.localStorageUtils.limparDadosLocaisUsuario();
    this.router.navigate(['auth']);
  }
}
