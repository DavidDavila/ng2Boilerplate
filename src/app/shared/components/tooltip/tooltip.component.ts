
import { Component, Input, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'tooltip',
   templateUrl: 'tooltip.component.html',
})

export class TooltipComponent {
   @ViewChild('tooltipTitular') tooltipTitular: ElementRef;
   @ViewChild('tooltipDescr') tooltipDescr: ElementRef;
   @ViewChild('tooltipDescrSpan') tooltipDescrSpan: ElementRef;
   @ViewChild('tooltipIcon') tooltipIcon: ElementRef;

   @Input() tooltipInfo:string;
   @Input() descp:string;
   @Input() icon:string;
   @Input() literal:string;

   private hover = false;
   private visible = false;
   private topTooltip: number;
   public posicionTooltip: string;

   constructor(private el:ElementRef){
   }

   @HostListener('mouseenter') onMouseEnter() {
      this.hover = true;
      //Retardamos el calculo de la posición para esperar a que se vea el modulo
      setTimeout(() => {
         this.posicion();
      }, 0);
   }

   @HostListener('mouseleave') onMouseLeave() {
      setTimeout(() => {
         this.visible = false;
      }, 100);
      setTimeout(() => {
         this.hover = false;
      }, 200);
   }

   posicion() {

      /* variables de la ventana */
      let windowWidth =  window.innerWidth;
      let windowHeight =  window.innerHeight;
      let windowScroll = window.pageYOffset;

      /* variables del tooltip*/
      var widthTooltip = this.tooltipDescrSpan.nativeElement.offsetWidth + 42; //Le sumamos el padding y el borde del contenedor
      var heightTooltip = this.tooltipDescr.nativeElement.offsetHeight;

      if(this.tooltipTitular){
         var tooltipTitularWidth = this.tooltipTitular.nativeElement.offsetWidth + 15;
         /* variables del title del tooltip */
         var tooltipTitularLeft = this.tooltipTitular.nativeElement.parentElement.offsetLeft;
      } else if(this.tooltipIcon){
         var tooltipTitularWidth = this.tooltipIcon.nativeElement.offsetWidth + 30;
         /* variables del title del tooltip */
         var tooltipTitularLeft = this.tooltipIcon.nativeElement.parentElement.offsetLeft;
      }
      // Comprobamos si el tamaño de la pantalla es mayor a la suma de la posición global del tooltip y de su tamaño con un margen
      if((windowWidth * 0.65) < (tooltipTitularLeft + tooltipTitularWidth + widthTooltip)){
         // Comprobamos si el tooltip va arriba o abajo
         if(windowScroll > heightTooltip){
            this.posicionTooltip = 'bottom';
         } else {
            this.posicionTooltip = 'top';
         }
      } else {
         this.tooltipDescr.nativeElement.style.top = 12 - (heightTooltip / 2);
      }

      /* ponemos el width */
      if(!this.tooltipDescr.nativeElement.style.width){
         this.tooltipDescr.nativeElement.style.width = widthTooltip;
      }
      setTimeout(() => {
         this.visible = true;
      }, 200);
   }
}
