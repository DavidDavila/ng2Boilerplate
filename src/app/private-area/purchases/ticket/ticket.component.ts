import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';

import { TicketService } from './ticket.service';
import { ModalTicketComponent } from './modal-ticket/modal-ticket.component';
import { TicketModel } from './ticket.model';

@Component({
  providers: [TicketService],
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticketId: string;
  maxTicketItemsFiltered: number = 5;
  payment: any;
  ticket: TicketModel;
  errorMessage: string;
  showCoupons: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _ticketService: TicketService,
    public dialog: MdDialog
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ticketId = params['ticketId'];
      this.payment = {
        status: 'paid'
      };

      return this._ticketService.ticketById(this.ticketId)
        .subscribe(
          ticket => {
            this.ticket = ticket;
          },
          error => this.errorMessage = <any>error
        );
    });
  }

  openTicketModal() {
    const dialogRef = this.dialog.open(ModalTicketComponent);

    dialogRef.componentInstance.ticket = {
      date: this.ticket.date,
      mall: this.ticket.mall,
      lines: this.ticket.lines
    };
  }

  viewAllItems(): void {
    this.maxTicketItemsFiltered = this.ticket.items.length;
  }

  viewMoreItems(): void {
    let currentMaxItems = this.maxTicketItemsFiltered;
    currentMaxItems += currentMaxItems;
    if (this.ticket.items.length <= currentMaxItems) {
      currentMaxItems = this.ticket.items.length;
    }
    this.maxTicketItemsFiltered = currentMaxItems;
  }

}
