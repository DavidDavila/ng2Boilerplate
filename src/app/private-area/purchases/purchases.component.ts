import { Component, OnInit } from '@angular/core';

//data of filters

import { areaFilter, dateFilter } from './filters/models';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  public areaData:Array<any>;
  public dateData:Array<any>;
  public areaCurrent:any;
  public dateCurrent:any;

  public actualPage:Number;
  public totalPages:Number

  constructor() {
  }

  ngOnInit() {

    this.areaData = areaFilter;
    this.dateData = dateFilter;

    this.areaCurrent = areaFilter[0];
    this.dateCurrent = dateFilter[0];

    //Para test

    this.actualPage = 18;
    this.totalPages = 57;
  }

  setFilter(index, name){
    let element = this[name + 'Data'][index];
    this[name + 'Current'] = element;
  }

  setActualPage(pageNumber){
     this.actualPage = pageNumber;
  }
}
