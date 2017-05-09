import { Component, ElementRef, NgZone, OnInit, ViewChild, Input, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
import 'rxjs/add/operator/startWith';

//services
import { UtilService } from './../../services/util.service';

//data map
import { mapTypeStyle, markers } from './dataMap/map';


@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css'],
    providers:[UtilService]
})

export class MapsComponent implements OnInit {

    /* Formulario */
    // stateForm: FormGroup;
    public idMolCenter: number;
    buscadorCentro: FormControl;
    autocompleteFiltered: any;

    /* Map */
    public latitude: number;
    public longitude: number;
    public zoom: number;
    public centers: any = [];

    public markersData:Array<any>;
    public mapTypeStyleData:Array<any>;

    public infoWindows:any;

    @Input() state;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private _utilService : UtilService
    ) {
        this.markersData = markers;
        this.mapTypeStyleData = mapTypeStyle;
        this.buscadorCentro = new FormControl();
        this.autocompleteFiltered = this.buscadorCentro.valueChanges
            .startWith(null)
            .map(name => this.filterCenters( name? name : '' ));
    }

    ngOnInit() {
        //set google maps defaults
        this.zoom = 14;       
        this.latitude = 36.1438306;
        this.longitude = -5.460311111111111;
        this.infoWindows = {isOpen: false};
    }

    filterCenters(val:any) {
        if(typeof val === 'string'){
            this.centers = [];
            if( val.length > 3){
                for (var i = 0, len = markers.length; i < len; i++) {
                    
                    let name = this._utilService.getCleanedString(markers[i].name),
                    postalCode = this._utilService.getCleanedString(markers[i].postalCode),
                    city = this._utilService.getCleanedString(markers[i].city),
                    value = this._utilService.getCleanedString(val);

                    if(name.includes(val) || postalCode.includes(val) || city.includes(val)){
                        this.centers.push(markers[i]);
                    }
                }
            } else {
                this.centers = markers
            }
            return this.centers;
        } else if(typeof val === 'object'){
            this.clickedMarker(val);
            this.buscadorCentro.reset({value: val.name, disabled: true});
        }

    }

    clickedMarker(elem: any) {
      
        this.zoom = 15;
        this.latitude = elem.latitud;
        this.longitude = elem.longitude;

        this.infoWindows = {
            latitude: elem.latitude + 0.0015,
            longitude: elem.longitude,
            name: elem.name,
            address: elem.address,
            city: elem.city,
            postalCode: elem.postalCode,
            phone: elem.phone,
            timetable: elem.timetable,
            isOpen : true
        }
        //TODO - seleccionar tienda como favorita
    }

    infoWindowClose(){
        this.infoWindows.isOpen = false;
    }

}
