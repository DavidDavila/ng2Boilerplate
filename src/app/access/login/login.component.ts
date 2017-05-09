
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  /* validators */
  private emailValidator = appConstant.regex.email;
  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;
  /* errores */
  public statusPassword = false;
  /* -- Variables para el módulo de aviso -- */
  public infoShow = false;
  public infoClass = "error";
  public infoText = '¡ Ooops ! La contraseña no es correcta, por favor revísala';

  constructor(
    private _router: Router,
    public _clientModel: ClientModel
  ) {}

  ngOnInit() {
    this.stateForm = new FormGroup({
      email: new FormControl({value: this._clientModel.email, disabled: true}, [<any>Validators.required,  <any>Validators.pattern(this.emailValidator)]),
      password: new FormControl({value: this._clientModel.password, disabled: false}, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {

    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    /* Quitamos los avisos y errores activados */
    this.infoShow = false;
    this.statusPassword = false;
    /* Guardamos los datos */
    this._clientModel.password = this.stateForm.value.password;

    /* --- Comprobamos que la contraseña sea la correcta --- */
    if(this._clientModel.password === 'pruebas01'){
      this._router.navigate(['acceso', 'datos-adicionales']);
    } else if(this._clientModel.password === 'pruebas02'){
      this._router.navigate(['acceso', 'comprobar-club']);
    } else {
      /* Quitamos el cargando del botón */
        this.sending = false;
        /* Devolvemos error al formulario, ya que la contraseña no es correcta */
        this.statusPassword = true;
        this.infoShow = true;
    }
  }

}
