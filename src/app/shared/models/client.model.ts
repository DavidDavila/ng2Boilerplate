import { Injectable } from '@angular/core';

@Injectable()
export class ClientModel {
  private _name:String;
  private _surname:String;
  private _email:String;
  private _password:String;
  private _phones:Number;
  private _fiscalIdentificationType:String;
  private _fiscalIdentificationNumber:String;
  private _birthdate:String;
  private _isConfirmed:Boolean = false;
  private _isClub:Boolean = false;
  private _postalCode:Number;

  constructor() { }

  /* Nombre del usuario */
  get name():String {
    return this._name;
  }

  set name(value:String) {
    this._name = value;
  }

  /* Apellidos del usuario */
  get surname():String {
    return this._surname;
  }

  set surname(value:String) {
    this._surname = value;
  }

  /* Email del usuario */
  get email():String {
    return this._email;
  }

  set email(value:String) {
    this._email = value;
  }

  /* Contraseña del usuario */
  get password():String {
    return this._password;
  }

  set password(value:String) {
    this._password = value;
  }

  /* Teléfono del usuario */
  get phones() {
    return this._phones;
  }

  set phones(value:Number) {
    this._phones = value;
  }

  /* Tipo de identificador */
  get fiscalIdentificationType() {
    return this._fiscalIdentificationType;
  }

  set fiscalIdentificationType(value:String) {
    this._fiscalIdentificationType = value;
  }

  /* Numero de identificador */
  get fiscalIdentificationNumber() {
    return this._fiscalIdentificationNumber;
  }

  set fiscalIdentificationNumber(value:String) {
    this._fiscalIdentificationNumber = value;
  }

  /* Fecha de nacimiento */
  get birthdate() {
    return this._birthdate;
  }

  set birthdate(value:String) {
    this._birthdate = value;
  }
   /* si es my account */
  get isConfirmed():Boolean {
    return this._isConfirmed;
  }

  set isConfirmed(value:Boolean) {
    this._isConfirmed = value;
  }

  /* si el suuario es de club */
  get isClub():Boolean {
    return this._isClub;
  }

  set isClub(value:Boolean) {
    this._isClub = value;
  }

  /* Código Postal */
  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value:Number) {
    this._postalCode = value;
  }
}

export interface Client {
  data:{
    name:string;
    surname:string;
    email:string[];
    phones:number[];
    password:string;
    birthdate:number;
    fiscalIdentificationType:string;
    fiscalIdentificationNumber:string;
    postalCode:number;
  }
  club:{  };
  ecommerce:{  };
}
