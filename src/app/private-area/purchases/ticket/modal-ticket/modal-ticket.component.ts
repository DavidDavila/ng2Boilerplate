import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import { MdDialog } from '@angular/material';

declare const jsPDF;

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.css']
})
export class ModalTicketComponent implements OnInit {

  @Input() ticket;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {}

  print(): void {
    window.print();
  }

  download() {
    const doc = new jsPDF();
    const len = this.ticket.lines.length;
    let pages = 3;
    doc.setFont('courier');
    doc.setFontSize(7);

    for (let i = 0; i <= len; i++) {

      const line = this.ticket.lines[i] ? this.ticket.lines[i] : '';

      if (pages === 95) {
        doc.addPage();
        pages = 3;
      }

      doc.text(10, pages * 3, line);
      pages++;

    }
    // Save the PDF
    doc.save('Test.pdf');
  }

}
