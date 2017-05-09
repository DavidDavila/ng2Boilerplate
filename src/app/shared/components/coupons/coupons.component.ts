import {Component, Input, OnInit} from '@angular/core';
import { ModalCouponComponent } from './modal-coupon/modal-coupon.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  @Input() coupons;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openCouponModal(coupon: any): void {
    const dialogRef = this.dialog.open(ModalCouponComponent);
    dialogRef.componentInstance.coupon = coupon;
  }

}
