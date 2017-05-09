import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

 /*
  El componenter Dropdown recibe:
    @Input() title;
    @Input() name;
    @Input() data;

  y emite itemClicked( valor selectionado )
  */

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() title;
  @Input() name;
  @Input() data;

  @Output() itemClicked = new EventEmitter();

  public currentSelected;
  public isOpen;
  
  constructor() {
    this.isOpen = false;
  }

  ngOnInit() {
    this.currentSelected = this.title;
  } 
  selectItem(item){
    
    this.currentSelected = item.name
    this.itemClicked.emit( item.value );    
  }
  toggleSelected(){
    this.isOpen =  !this.isOpen
  }

}
