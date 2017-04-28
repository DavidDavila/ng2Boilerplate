import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

//Models
import { ClientModel } from "../shared/models/client.model";
//Constanst
import { appConstant } from "../shared/models/dataApp.type";

@Component({
  selector: 'app-estilos-component',
  templateUrl: './estilos-component.component.html',
  styleUrls: ['./estilos-component.component.css']
})
export class EstilosComponentComponent implements OnInit {

  /* validators */
  private emailValidator = appConstant.regex.email;
  /* variable para el cargando del botón */
  public sending = false;
  /* Formulario */
  stateForm: FormGroup;

  /* -- Variables para el módulo de aviso -- */
  public infoShow = false;
  public infoClass = "error";
  public infoText = '¡ Ooops ! La contraseña no es correcta, por favor revísala';

  constructor(
    private _clientModel: ClientModel
  ) {}

  ngOnInit() {
    this.stateForm = new FormGroup({
      name: new FormControl({value: this._clientModel.name, disabled: false}, [Validators.required]),
      email: new FormControl({value: this._clientModel.email, disabled: true}, [<any>Validators.required,  <any>Validators.pattern(this.emailValidator)]),
      password: new FormControl({value: this._clientModel.password, disabled: false}, [Validators.required, Validators.minLength(6)]),
      fiscalIdentificationType: new FormControl({value: '', disabled: false},),
      birthdate: new FormControl({value: '', disabled: false},),
      club: new FormControl({value: '', disabled: false}, [Validators.required]),
      radioo: new FormControl({value: '', disabled: false}, [Validators.required])
    });
  }

  onSubmit() {

    /* Ponemos el cargando en el botón mientra se ejecutan los servicios */
    this.sending = true;
    /* Quitamos los avisos y errores activados */
    this.infoShow = false;
    /* guardamos los datos*/
    this._clientModel.password = this.stateForm.value.password;

    /* Devolvemos error al formulario, ya que la contraseña no es correcta */
    this.infoShow = true;
  }

}
