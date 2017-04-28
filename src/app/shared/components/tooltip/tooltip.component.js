"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { tooltipInfo } from './dataTooltip.type';
var TooltipComponent = (function () {
    function TooltipComponent(el) {
        this.el = el;
        this.hover = false;
        this.visible = false;
    }
    TooltipComponent.prototype.ngOnChanges = function () {
    };
    TooltipComponent.prototype.onMouseEnter = function () {
        var _this = this;
        this.hover = true;
        //Retardamos el calculo de la posición para esperar a que se vea el modulo
        setTimeout(function () {
            _this.posicion();
        }, 0);
    };
    TooltipComponent.prototype.onMouseLeave = function () {
        var _this = this;
        setTimeout(function () {
            _this.visible = false;
        }, 100);
        setTimeout(function () {
            _this.hover = false;
        }, 200);
    };
    TooltipComponent.prototype.posicion = function () {
        var _this = this;
        /* variables de la ventana */
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowScroll = window.pageYOffset;
        /* variables del tooltip*/
        var widthTooltip = this.tooltipDescrSpan.nativeElement.offsetWidth + 42; //Le sumamos el padding y el borde del contenedor
        var heightTooltip = this.tooltipDescr.nativeElement.offsetHeight;
        if (this.tooltipTitular) {
            var tooltipTitularWidth = this.tooltipTitular.nativeElement.offsetWidth + 15;
            /* variables del title del tooltip */
            var tooltipTitularLeft = this.tooltipTitular.nativeElement.parentElement.offsetLeft;
        }
        else if (this.tooltipIcon) {
            var tooltipTitularWidth = this.tooltipIcon.nativeElement.offsetWidth + 30;
            /* variables del title del tooltip */
            var tooltipTitularLeft = this.tooltipIcon.nativeElement.parentElement.offsetLeft;
        }
        // Comprobamos si el tamaño de la pantalla es mayor a la suma de la posición global del tooltip y de su tamaño con un margen
        if ((windowWidth * 0.65) < (tooltipTitularLeft + tooltipTitularWidth + widthTooltip)) {
            // Comprobamos si el tooltip va arriba o abajo
            if (windowScroll > heightTooltip) {
                this.posicionTooltip = 'bottom';
            }
            else {
                this.posicionTooltip = 'top';
            }
        }
        else {
            this.tooltipDescr.nativeElement.style.top = 12 - (heightTooltip / 2);
        }
        /* ponemos el width */
        if (!this.tooltipDescr.nativeElement.style.width) {
            this.tooltipDescr.nativeElement.style.width = widthTooltip;
        }
        setTimeout(function () {
            _this.visible = true;
        }, 200);
    };
    return TooltipComponent;
}());
__decorate([
    core_1.ViewChild('tooltipTitular'),
    __metadata("design:type", core_1.ElementRef)
], TooltipComponent.prototype, "tooltipTitular", void 0);
__decorate([
    core_1.ViewChild('tooltipDescr'),
    __metadata("design:type", core_1.ElementRef)
], TooltipComponent.prototype, "tooltipDescr", void 0);
__decorate([
    core_1.ViewChild('tooltipDescrSpan'),
    __metadata("design:type", core_1.ElementRef)
], TooltipComponent.prototype, "tooltipDescrSpan", void 0);
__decorate([
    core_1.ViewChild('tooltipIcon'),
    __metadata("design:type", core_1.ElementRef)
], TooltipComponent.prototype, "tooltipIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TooltipComponent.prototype, "tooltipInfo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TooltipComponent.prototype, "descp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "literal", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipComponent.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipComponent.prototype, "onMouseLeave", null);
TooltipComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tooltip',
        templateUrl: 'tooltip.component.html',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TooltipComponent);
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=tooltip.component.js.map