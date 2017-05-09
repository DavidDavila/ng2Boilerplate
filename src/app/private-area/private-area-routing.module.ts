import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasesComponent } from './purchases/purchases.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { PrivateAreaComponent } from './private-area.component';
import { TicketComponent } from './purchases/ticket/ticket.component';



const routes: Routes = [
  {
    path: '',
    component: PrivateAreaComponent,
    children: [
        /* Purchase */
      { path: 'mis-compras/compras/:ticketId', component: TicketComponent } ,
      { path: 'mis-compras/compras', component: PurchasesComponent },
        /* Client data */
      { path: 'mis-datos/datos-acceso', component: ClientDataComponent },
      { path: 'mis-datos/datos-personales', component: ClientDataComponent },
      { path: 'mis-datos/unidad-familiar', component: ClientDataComponent },
      { path: 'mis-datos/direcciones-envio', component: ClientDataComponent },
      { path: 'mis-datos/datos-facturacion', component: ClientDataComponent },
      { path: 'mis-datos/datos-pago', component: ClientDataComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateAreaRoutingModule { }
