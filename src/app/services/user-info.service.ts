import { UserInfo } from './../models/account/user-info';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { EventService } from './event.service';
import { UserUpdate } from '../models/account/user-update';
import { UserChangePass } from '../models/account/user-change-pass';

@Injectable()
export class UserInfoService extends BaseService {
  constructor(private http: HttpClient, public eventService: EventService) {
    super();
  }

  GetUser = new EventEmitter();

  userInfo(id: string): Observable<UserInfo> {
    let response = this.http
      .get(this.UrlServiceV1 + '/users/' + id, this.ObterAuthHeaderJson())
      .pipe(
        map(this.eventService.getUserExtract),
        catchError(this.serviceError)
      );
    return response;
  }

  updateUser(user: UserUpdate, id: string): Observable<UserUpdate> {
    let response = this.http
      .put(this.UrlServiceV1 + '/users/' + id, user, this.ObterAuthHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  deleteAcount(id: string): Observable<UserUpdate> {
    let response = this.http
      .delete(this.UrlServiceV1 + '/users/' + id, this.ObterAuthHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  chagePassword(user: UserChangePass, id: string): Observable<any> {
    let response = this.http
      .put(
        this.UrlServiceV1 + '/users/updatepass/' + id,
        user,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  searchByUserKey(key: string): Observable<any>{
    let response = this.http
    .get(this.UrlServiceV1 + '/users/userkey/' + key, this.ObterAuthHeaderJson())
    .pipe(
      map(this.extractData),
      catchError(this.serviceError)
    );
    return response;
  }
}
