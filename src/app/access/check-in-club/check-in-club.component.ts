
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-check-in-club',
  templateUrl: './check-in-club.component.html'
})
export class CheckInClubComponent implements OnInit {

  /* validators */
  private tarjetaClubValidator = appConstant.regex.tarjetaClub;
  private nifValidator = appConstant.regex.nif;
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
      socioClub: new FormControl({value: '', disabled: false}, [Validators.required]),
      codigoTarjeta: new FormControl({value: '', disabled: false}, [Validators.required,  Validators.pattern(this.tarjetaClubValidator)]),
      nif: new FormControl({value: '', disabled: false}, [Validators.required, Validators.pattern(this.nifValidator)])
    });
  }

  onSubmit() {
    this._router.navigate(['registro', 'preferencias-comunicacion']);
  }

}
