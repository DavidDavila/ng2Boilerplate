
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  /* validators */
  private emailValidator = appConstant.regex.email;
  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;

  constructor(
    private _router: Router,
    public _clientModel: ClientModel
  ) {}


  /* errores */
  public statusEmail = false;
  /* -- Variables para el módulo de aviso -- */
  public infoShow = false;
  public infoClass = "error";
  public infoText = '¡ Ooops ! Los emails no coinciden';

  ngOnInit() {
    /* Generamos los controles para validar el formulario */
    this.stateForm = new FormGroup({
      email: new FormControl({value: this._clientModel.email, disabled: false}, [<any>Validators.required,  <any>Validators.pattern(this.emailValidator)]),
      email02: new FormControl({value: '', disabled: false}, [<any>Validators.required,  <any>Validators.pattern(this.emailValidator)]),
      password: new FormControl({value: this._clientModel.password, disabled: false}, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {

    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    /* Quitamos los avisos y errores activados */
    this.infoShow = false;
    this.statusEmail = false;

    /* --- Comprobamos que el formulario es correcto (lso emails coinciden) para registrar al usuario --- */
    if(this._clientModel.email === this.stateForm.value.email02) {
      this._clientModel.password = this.stateForm.value.passwor
      this._router.navigate(['acceso', 'acerca-de-ti']);
    } else {
      /* Quitamos el cargando del botón */
      this.sending = false;
      /* Devolvemos error al formulario */
      this.statusEmail = true;
      this.infoShow = true;
    }
  }

}
