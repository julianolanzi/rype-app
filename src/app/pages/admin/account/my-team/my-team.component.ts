import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

import { UserInfo } from 'src/app/models/account/user-info';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css'],
})
export class MyTeamComponent {
  team!: UserInfo;
  isAdmin: boolean = false;
  isteam: boolean = false;
  localStorageUtils = new LocalStorageUtils();
  constructor(private UserInfoService: EventService) {}

  ngOnInit(): void {
    this.UserInfoService.EmitUserInfo.subscribe((response) => {
      if(response.team[0].teamName.length > 0){
        this.isteam = true;
        
        this.team = response;
        this.adminTeam(this.team);
      }else {
        this.isteam = false;
      }
      
      
    });
  }

  adminTeam(team: UserInfo) {
    let id = this.userLocalInfo();

    if (id == team.team[0].admin) {

      return this.isAdmin = true;
    }else {
      return this.isAdmin = false;
    }
    
  }

  userLocalInfo() {
    let user = this.localStorageUtils.obertUser();
    user = JSON.parse(user);

    let id = user.id;
    return id;
  }
}
