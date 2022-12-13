import { EventEmitter, Injectable } from '@angular/core';


export class EventService {
    
  EmitirRecoveryPass = new EventEmitter<any>();


  eventEmit(response: any) {
    this.EmitirRecoveryPass.emit(response);
  }
}
