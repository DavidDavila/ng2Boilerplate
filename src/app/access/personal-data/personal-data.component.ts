
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html'
})
export class PersonalDataComponent implements OnInit {

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
      name: new FormControl({value: this._clientModel.name, disabled: false}, [<any>Validators.required]),
      surname: new FormControl({value: this._clientModel.surname, disabled: false}, [<any>Validators.required]),
      phones: new FormControl({value: this._clientModel.phones, disabled: false}, [<any>Validators.required]),
      fiscalIdentificationType: new FormControl({value: this._clientModel.fiscalIdentificationType, disabled: false}, [<any>Validators.required]),
      fiscalIdentificationNumber: new FormControl({value: this._clientModel.fiscalIdentificationNumber, disabled: false}, [<any>Validators.required]),
      birthdate: new FormControl({value: this._clientModel.birthdate, disabled: false}, [<any>Validators.required]),
      postalCode: new FormControl({value: this._clientModel.postalCode, disabled: false}),
      myAccount: new FormControl({value: this._clientModel.isConfirmed, disabled: false}, [<any>Validators.required])
    });
  }

  onSubmit() {
    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    this._router.navigate(['acceso', 'acerca-de-ti']);
  }

}
