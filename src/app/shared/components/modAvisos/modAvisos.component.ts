
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'modAvisos',
   templateUrl: 'modAvisos.component.html',
})

export class ModAvisosComponent implements OnChanges {
   @Input() textoAviso:string;
   @Input() tipoAviso:string;

   constructor() {
   }

   ngOnChanges():void {
   }
}
