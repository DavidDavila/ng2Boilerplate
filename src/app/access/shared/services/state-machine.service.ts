
import { Injectable } from '@angular/core';

/**
 * Controlará la maquina de estados del modulo de acceso:
 */
@Injectable()
export class StateMachineService {
  
  /**
   * Mantiene el nombre del estado actual de la máquina de estados
   */
  private _state:String;
  
  /**
   * Dependiendo del estado actual y de al que se quiere ir, sucederán cosas diferentes
   * @param nextState
   */
  setState(nextState:String):void {
  
  }
  
  constructor() { }
  
  get state():String {
    return this._state;
  }
}
