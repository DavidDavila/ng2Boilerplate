import { Component, OnInit } from '@angular/core';

//external imports
import * as moment from 'moment';

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

  public actualPage:number;
  public totalPages:number;
  private numElemPerPage:number;

  public allticketList:Array<any>;
  public ticketListFiltered: Array<any>
  public ticketList:Array<any>;

  public filter: any;
  constructor() {       
  }

  ngOnInit() {

    this.areaData = areaFilter;
    this.dateData = dateFilter;


    this.allticketList = [];
    this.ticketList = [];

    this.actualPage = 1;
    this.numElemPerPage = 10;

    //Testing
    this.makeMock()

    //no filtered;
    this.ticketListFiltered = this.allticketList;
    this.makePagination();
    this.setVisibleTickets();

    //filter

    this.filter = {
      'area' : 'Todas',
      'date' : 'Último año'
    }
  }

  setFilter(index, name){
    let element = this[name + 'Data'][index];
    this[name + 'Current'] = element;

    this.filter[name] = element.name

    this.filterTickets( this.filter );  

    this.makePagination();
    this.setVisibleTickets(); 
  }

  setActualPage(pageNumber){
    this.actualPage = pageNumber;

    this.makePagination();
    this.setVisibleTickets();

  }

  makeMock(){
    for(let i =0; i < 1000; i++){

      let randomDescription = ['Online', 'Repostaje', 'Hiper'],
      randomState = ['', 'Pendiente', 'Revisa tu pedido','Entregado'],
      start = new Date(2016, 4, 5), 
      end =  new Date(),
      date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      let item = {
        "header":{
          "_ticketType":{
          "description": randomDescription[Math.floor((Math.random() * 3))]},
          "operationType":"Test Name "+Number(i+1),
          "state": randomState[Math.floor((Math.random() * 4) + 1)],
          "netAmount": Math.floor((Math.random() * 100) + 1)
        },
        "favourite": Math.floor((Math.random() * 2)),
        "date" : date.toString()
      }
      this.allticketList.push(item)
    }
  }

  filterTickets(filter){
    let substractMonths = undefined;

    switch(filter.date){
      case 'Último año':
       substractMonths = 12;
      break;
      case 'Últimos 3 meses':
       substractMonths = 3;
      break;
      case 'Últimos 6 meses':
       substractMonths = 6;
      break;
      case 'Últimos 9 meses':
       substractMonths = 9;
      break;
    }
   
    this.ticketListFiltered = [];
    this.allticketList.map(( ticket ) =>{
      let date = moment(new Date(ticket.date));

      if( (filter.area === 'Todas' || ticket.header._ticketType.description === filter.area) && date.isAfter(moment(new Date()).subtract(substractMonths,'month')) ) this.ticketListFiltered.push(ticket)

      }, filter)
    
    this.actualPage = 1;
  }

  makePagination(){

    this.totalPages =  Math.ceil(this.ticketListFiltered.length / this.numElemPerPage);
  }

  setVisibleTickets(){
    this.ticketList = [];
    for(let i = this.numElemPerPage * Number(this.actualPage-1), len = i + this.numElemPerPage; i< len; i++ ){
      this.ticketListFiltered[i]? this.ticketList.push( this.ticketListFiltered[i] ):'';
    }
  }
}
