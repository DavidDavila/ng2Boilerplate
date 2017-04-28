
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html'
})
export class AboutYouComponent implements OnInit {

  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;

  constructor(
    private _router: Router,
    private _clientModel: ClientModel
  ) {}

  ngOnInit() {
    /* Generamos los controles para validar el formulario */
    this.stateForm = new FormGroup({
      modaMujer: new FormControl({value:'', disabled: false}),
      belleza: new FormControl({value:'', disabled: false}),
      joyeriaRelojeria: new FormControl({value:'', disabled: false}),
      hogar: new FormControl({value:'', disabled: false}),
      supermercados: new FormControl({value:'', disabled: false}),
      deporte: new FormControl({value:'', disabled: false}),
      tecnologia: new FormControl({value:'', disabled: false}),
      motor: new FormControl({value:'', disabled: false}),
      buscadorCentro: new FormControl({value:'', disabled: false}),
    });
  }

  onSubmit() {
    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    this._router.navigate(['acceso', 'preferencias-comunicacion']);
  }

}
