import { catchError, map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UploadImgService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  uploadImgUser(id: string, file: File): Observable<any> {

    const formData = new FormData();
    formData.append('file', file,);

    let response = this.http
      .post(
        this.UrlServiceV1 + '/users/img/' +id,  formData,
        this.ObterAuthHeaderuploadJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }
}
