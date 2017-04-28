
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html'
})
export class CheckEmailComponent implements OnInit {

  /* validators */
  private emailValidator = appConstant.regex.email;
  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;

  constructor(
    private _router: Router,
    private _clientModel: ClientModel
  ) {}

  ngOnInit() {
    this.stateForm = new FormGroup({
      email: new FormControl({value: this._clientModel.email, disabled: false}, [<any>Validators.required,  <any>Validators.pattern(this.emailValidator)])
    });
  }

  onSubmit() {
    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    /* guardamos los datos en el modelo del cliente */
    this._clientModel.email = this.stateForm.value.email;

    if(this._clientModel.email === 'pruebas01@gmail.com'){
      this._router.navigate(['acceso', 'login']);
    } else if(this._clientModel.email === 'pruebas02@gmail.com'){
      this._router.navigate(['acceso', 'enviar-email']);
    } else {
      this._router.navigate(['acceso', 'registro']);
    }
  }

}
