
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-quality-data',
  templateUrl: './quality-data.component.html',
  providers: [ QualityDataComponent ]
})

export class QualityDataComponent implements OnInit {

  /* validators */
  private dateValidator = appConstant.regex.date;
  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;

  constructor(
    private _router: Router,
    public _clientModel: ClientModel
  ) { }

  /* -- Datos del usuario -- */
  private user;
  public emails;

  ngOnInit() {
    if(typeof this._clientModel.email === 'object' && !this._clientModel.isClub){
      this.emails = this._clientModel.email;
      this.stateForm = new FormGroup({
        email: new FormControl({value: '', disabled: false},[<any>Validators.required]),
        birthdate: new FormControl({value: this._clientModel.birthdate, disabled: false}),
        club: new FormControl({value: this._clientModel.isClub, disabled: false}, [<any>Validators.required]),
        myAccount: new FormControl({value: '', disabled: false}, [<any>Validators.required])
      });

    } else if(typeof this._clientModel.email === 'object') {
      this.emails = this._clientModel.email;
      this.stateForm = new FormGroup({
        email: new FormControl({value: '', disabled: false},[<any>Validators.required]),
        birthdate: new FormControl({value: this._clientModel.birthdate, disabled: false}),
        myAccount: new FormControl({value: '', disabled: false}, [<any>Validators.required])
      });

    } else {
      this.stateForm = new FormGroup({
        club: new FormControl({value: this._clientModel.isClub, disabled: false}, [<any>Validators.required]),
        birthdate: new FormControl({value: this._clientModel.birthdate, disabled: false}),
        myAccount: new FormControl({value: '', disabled: false}, [<any>Validators.required])
      });
    }

  }

  onSubmit() {
    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;

    /* Si hemos seleccionado un email por defecto */
    if(this.stateForm.value.email){
      this._clientModel.email = this.stateForm.value.email;
    }

    if(this.stateForm.value.birthdate){
      this._clientModel.birthdate = this.stateForm.value.birthdate;
    }

    if(this.stateForm.value.myAccount){
      this._clientModel.isConfirmed = this.stateForm.value.myAccount;
    }

    if(this.stateForm.value.club){
      this._clientModel.isClub = this.stateForm.value.club;
    }

    this._router.navigate(['acceso', 'datos-personales']);

  }

}
