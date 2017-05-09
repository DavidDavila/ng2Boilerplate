import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TicketModel } from './ticket.model';

@Injectable()
export class TicketService {

  constructor(private _http: Http) { }

  ticketById(ticketId: String): Observable<TicketModel> {
    const url = `/mocks/ticket.json?ticketId=${ticketId}`;

    return this._http
        .get(url)
        .map((res: Response) => res.json() as TicketModel)
        // .map((response: Response) => <TicketModel>.response.json())
        .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || 'backend server error');
  }

}
