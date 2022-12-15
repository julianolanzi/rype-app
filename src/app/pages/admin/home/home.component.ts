import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user!: any;
  email: string = "";
  nickName: string = "";
  url: string = '';
  isPost: boolean = false;

  localStorageUtils = new LocalStorageUtils();
  constructor(private router: Router){

    this.isPost = this.isPost;

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userLogin();
    this.dataUser();
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

  alertPost(isPost: boolean){
    if(isPost == true){
      this.isPost = true;
      return this.isPost;
    }else{
      this.isPost = false;
      return this.isPost;
    }

  }
  dataUser() {
    this.user = this.localStorageUtils.obertUser();
    this.user = JSON.parse(this.user);
    this.url = this.user.url;
    this.nickName = this.user.nickname;
  }

}
