import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

//data menu
import { menu } from './dataMenu/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public menuData: any;
  public currentUrl:String;
  public blockState:String;
  public openBlock:String;
  public currentState:String;

  constructor(
      private router:Router
  ) {}

  ngOnInit() {
    this.menuData = menu;

    this.currentUrl = this.router.url;
    let splitCurrentUrl = this.currentUrl.split('/');
    this.blockState = splitCurrentUrl[2];
    this.currentState = splitCurrentUrl[3];
    if(!this.currentState){
      this.currentState = this.blockState;
    }
  }

  seeBlock( state: String ):void{
    this.openBlock = (state != this.openBlock) ? state : '';
  }

}
