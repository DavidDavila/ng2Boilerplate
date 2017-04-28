
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";

@Component({
  selector: 'app-comm-preferences',
  templateUrl: './comm-preferences.component.html'
})
export class CommPreferencesComponent implements OnInit {

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
      comunicacion: new FormControl({value: "", disabled: false}, [<any>Validators.required])
    });
  }

  onSubmit() {
    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;

    //TODO go to Area privada
  }

}
