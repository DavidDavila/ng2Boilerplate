import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public currentState:String;
  public currentSubState:String;
  constructor() {

  }

  ngOnInit() {
  }
  setCurrentState( state: String ):void{
    this.currentState = state;
    this.currentSubState = state;
  }
  setCurrentSubState( state: String ):void{
    this.currentSubState = state;
  }

}
