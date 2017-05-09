import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  
  @Input() data;

  public fields:Array<any>;
  public tickets:any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.data)
  }

}
