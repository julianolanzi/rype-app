import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {

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

}
