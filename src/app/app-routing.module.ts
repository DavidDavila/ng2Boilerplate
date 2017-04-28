
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { FrontPageComponent } from "./front-page/front-page.component";
import { EstilosComponentComponent } from './estilos-component/estilos-component.component';
import { CheckSessionComponent } from "./check-session/check-session.component";

const routes: Routes = [
  //Portada
  {
    path: 'portada',
    component: FrontPageComponent
  },

  {
    path: 'estilos',
    component: EstilosComponentComponent
  },

  //Submódulo de acceso
  {
    path: 'acceso',
    loadChildren: './access/access.module'
  },

  //Submódulo de área privada
  {
    path: 'area-privada',
    loadChildren: './private-area/private-area.module#PrivateAreaModule'

  },

  //Fallback route
  {
    path: '**',
    component: CheckSessionComponent
  },

  //Index route
  {
    path: '',
    component: CheckSessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
