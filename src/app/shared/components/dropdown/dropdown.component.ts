import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdCoreModule,
  MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdLineModule, MdListModule, MdMenuModule, MdOptionModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule,
  MdRippleModule,
  MdSelectionModule,
  MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule, MdToolbarModule,
  MdTooltipModule,
  OverlayContainer
} from '@angular/material';

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

  public foods:Array<any>
  constructor() {

    this.foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  }

  ngOnInit() {
  }

  onItemSelected($event){
  }

  onItemClicked($event, name){
    this.title = this.data[$event.value].name;
    this.itemClicked.emit($event.value);
  }

  onShow($event){
  }

  onHide($event,  name){
  }

}
