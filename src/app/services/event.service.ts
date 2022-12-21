import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export  class EventService {
  EmitirRecoveryPass = new EventEmitter<any>();
  EmitUserInfo = new EventEmitter();

  eventEmit(response: any) {
    this.EmitirRecoveryPass.emit(response);
  }

  getUserExtract = (response: any) => {
    this.EmitUserInfo.emit(response);
    return response;
  }
}
