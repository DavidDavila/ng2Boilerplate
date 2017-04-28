
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';

//Models
import { ClientModel } from "../../shared/models/client.model";
//Constanst
import { appConstant } from "../../shared/models/dataApp.type";

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html'
})
export class RememberPasswordComponent implements OnInit {

  /* validators */
  private emailValidator = appConstant.regex.email;
  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;

  constructor(
    private _router: Router,
    private _clientModel: ClientModel
  ) { }

  public errors = {
    email : {
      value :false,
      text: 'El correo electrónico facilitado no es válido'
    }
  };

  /* -- Variables para el módulo de aviso -- */
  public infoShow = false;
  public infoClass:string = 'error';
  public infoText:string = '¡ Ooops ! No tenemos registro de este correo electrónico en nuestro sistema';

  ngOnInit() {
    /* Generamos los controles para validar el formulario */
    this.stateForm = new FormGroup({
      email: new FormControl({value: this._clientModel.email, disabled: false}, [<any>Validators.required,  <any>Validators.pattern(this.emailValidator)])
    });

  }

  onSubmit() {
    /* Actualizamos los datos del usuario */
    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    /* Quitamos los avisos y errores activados */
    this.infoShow = false;
    this.errors.email.value = false;

    /* -- Comprobamos que el email esté registrado -- */
    /* -- Si lo está le mandamos el email -- */
    // if(this._usuarioComponent.findUserEcommerce()){
    //   //TODO - Enviar al email
    //   this._router.navigate(['recuperarContrasenaEnviada']);
    //   /* El email no está registrado */
    // } else {
    //   /* Devolvemos error al formulario, ya que la contraseña no es correcta */
    //   this.infoShow = true;

    //   this.errors.email.value = true;
    //
    //   /* Quitamos el cargando del botón */
    //   this.sending = false;
    // }

  }

}
