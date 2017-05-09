import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

/*
  El componenter PaginationComponent recibe:
    @Input() actualPage;
    @Input() totalPages;

  y emite pageClicked( valor selectionado )
*/

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() actualPage;
  @Input() totalPages;

  @Output() pageClicked = new EventEmitter();

  public pagesToShow:Array<any>

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.setHtml( this.actualPage)
  }

  setHtml( currentPage ){
    let numTotalPages = this.totalPages
    currentPage <= 3 ?
      this.pagesToShow =[ 1, 2, 3, 4, '...', numTotalPages ]
      :
      currentPage + 3 <= numTotalPages ?
        this.pagesToShow =[ 1, '...', currentPage-1, currentPage, currentPage+1, '...',  numTotalPages ]
        :
        this.pagesToShow =[ 1, '...', numTotalPages-3, numTotalPages-2, numTotalPages-1, numTotalPages ]
  }

  setActualPage( pageNumber ){
    this.setHtml( this.actualPage = pageNumber );
    this.pageClicked.emit( this.actualPage );
  }

  addOne(){
    this.setActualPage( ++this.actualPage )
  }

  removeOne(){
    this.setActualPage( --this.actualPage )
  }
}

