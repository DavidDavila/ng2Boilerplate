import { Component, OnInit, HostListener } from '@angular/core';
import 'rxjs/add/operator/filter'
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {

  public currentState: String;
  public innerWidth: number;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    this.currentState = this.activatedRoute.snapshot.url[0].path;
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
}
