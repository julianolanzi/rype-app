import { Component } from '@angular/core';
import { UserInfo } from 'src/app/models/account/user-info';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  user!: UserInfo;


  constructor(private UserInfoService: EventService) {}

  ngOnInit(): void {
    this.UserInfoService.EmitUserInfo.subscribe((response) => {
      this.user = response;
    });
  }
  
}
