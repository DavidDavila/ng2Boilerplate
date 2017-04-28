import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasesComponent } from './purchases/purchases.component';
import { PrivateAreaComponent } from './private-area.component';



const routes: Routes = [
  {
    path: '',
    component: PrivateAreaComponent,
    children: [
      { path: 'mis-compras', component: PurchasesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateAreaRoutingModule { }
