
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx'

import { AuthService } from "../shared/services/auth.service";

/**
 * Muestra un spinner mientras se comprueba la sesión y obra en consecuencia según el resultado (async)
 */
@Component({
   selector: 'app-check-session',
   templateUrl: './check-session.component.html'
})
export class CheckSessionComponent implements OnInit, OnDestroy {

   private _checkSession:Subscription;

   constructor(
      private _authService:AuthService,
      private _router:Router
   ){}

   jump() {
      return this._router.navigateByUrl('/acceso/comprobar-club')
   }

   /**
    * Comprobamos el estado de la sesión con el servicio de autentificación
    */
   ngOnInit() {
      let dummy;
      console.log('CheckSessionComponent inicializado!. Comprobando estado de sesión...');

      this._checkSession = this._authService.checkSession().subscribe(
         (isAuthenticated) => {
            if(isAuthenticated) {
               console.log('Hay sesión, vamos a portada!');
              //  dummy = this._router.navigate(['portada']);
              //dummy = this._router.navigate(['acceso', 'check-email']);
            }

            else {
               console.log('No hay sesión, vamos a logarnos!');
               //dummy = this._router.navigate(['acceso', 'check-email']);
            }
         }
      )
   }

   ngOnDestroy(){
      console.log('CheckSessionComponent destruyéndose!...');

      //Evitamos leaks de memoria en caso de saltar de URl antes de terminar la comprobación
      this._checkSession.unsubscribe();
   }

}
