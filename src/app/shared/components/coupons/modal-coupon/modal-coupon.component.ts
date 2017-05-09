import {Component, Input, OnInit} from '@angular/core';
import { MdDialog } from '@angular/material';

declare const html2canvas;

@Component({
  selector: 'app-modal-coupon',
  templateUrl: './modal-coupon.component.html',
  styleUrls: ['./modal-coupon.component.css']
})
export class ModalCouponComponent implements OnInit {
  @Input() coupon;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {

  }

  print(): void {
    window.print();
  }

  download($event): void {
    html2canvas(document.getElementById('modal-component'), {
      background: '#fff',
      onrendered: function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg');
        link.target = '_blank';
        link.download = 'down';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        // console.log(canvas.toDataURL('image/png'));
        // window.open(canvas.toDataURL('image/png'), '', '_blank');
        document.body.appendChild(canvas);
      }
    });
  }

}
