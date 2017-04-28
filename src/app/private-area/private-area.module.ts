import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdCoreModule,
  MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdLineModule, MdListModule, MdMenuModule, MdOptionModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule,
  MdRippleModule,
  MdSelectionModule,
  MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule, MdToolbarModule,
  MdTooltipModule,
  OverlayContainer
} from '@angular/material';

//Routing
import { PrivateAreaRoutingModule } from './private-area-routing.module';

//External Components
//import { Ng2DropdownModule } from 'ng2-material-dropdown';

//Components
import { PrivateAreaComponent } from './private-area.component';
import { MenuComponent } from './menu/menu.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { DropdownComponent } from './../shared/components/dropdown/dropdown.component';
import { PaginationComponent } from './../shared/components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateAreaRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdCardModule,
    MdChipsModule,
    MdLineModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdOptionModule,
    MdButtonToggleModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdSlideToggleModule,
    MdSidenavModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdProgressBarModule,
    MdTooltipModule,
    MdTabsModule,
    MdSliderModule,
    MdSelectionModule,
    MdRippleModule,
    MdRadioModule,
    MdCoreModule
  ],
  declarations: [
     PrivateAreaComponent,
     MenuComponent,
     PurchasesComponent,
     DropdownComponent,
     PaginationComponent
  ]
})
export class PrivateAreaModule { }
