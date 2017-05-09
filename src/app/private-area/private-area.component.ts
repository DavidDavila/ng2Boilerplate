import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {

  public windowHeight: number = window.innerHeight;

  constructor() {}

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
    console.log(this.windowHeight);
  }

}
