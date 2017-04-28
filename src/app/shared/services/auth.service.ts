import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx'

@Injectable()
export class AuthService {

  private _isAuthenticated:boolean = false;

  constructor() { }

  get isAuthenticated():boolean {
    return this._isAuthenticated;
  }

  checkSession() : Observable<boolean> {
    const subject = new Subject<boolean>();

    //Simulamos una operación asíncrona de comprobación del estado de sesión
    setTimeout(() => {
      // this._isAuthenticated = (Math.random() > 0.5);
      
      subject.next(this._isAuthenticated);
      subject.complete();
    }, 2000);

    return subject;
  }
}
