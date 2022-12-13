import { resetPassword } from './../models/resert-password';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { recoveryPassword } from '../models/recovery-password';

import { User } from './../models/user-register';
import { BaseService } from './base.service';
import { UserLogin } from '../models/user-login';

@Injectable()
export class RegisterService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  registrarUsuario(usuario: User): Observable<User> {
    let response = this.http
      .post(this.UrlServiceV1 + 'users/', usuario, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  recoveryPassword(email: recoveryPassword): Observable<any> {
    let response = this.http
      .post(
        this.UrlServiceV1 + 'auth/forgot_password',
        email,
        this.ObterHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  resetPassword(user: resetPassword, token: string): Observable<any> {
  
    let response = this.http
      .post(
        this.UrlServiceV1 + 'auth/reset_password/' + token,
        user,
        this.ObterHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  loginUser(loginUser: UserLogin): Observable<UserLogin> {
    let response = this.http
      .post(
        this.UrlServiceV1 + 'auth/',
        loginUser,
        this.ObterHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }
}
