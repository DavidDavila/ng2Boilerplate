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

//External components
import {MomentModule} from 'angular2-moment';

//Components
import { PrivateAreaComponent } from './private-area.component';
import { MenuComponent } from './menu/menu.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { DropdownComponent } from './../shared/components/dropdown/dropdown.component';
import { PaginationComponent } from './../shared/components/pagination/pagination.component';
import { ListTicketsComponent } from './purchases/list-tickets/list-tickets.component';

//Components
import { TicketComponent } from './purchases/ticket/ticket.component';
import { ModalTicketComponent } from './purchases/ticket/modal-ticket/modal-ticket.component';
import { CouponsComponent } from '../shared/components/coupons/coupons.component';
import { ModalCouponComponent } from '../shared/components/coupons/modal-coupon/modal-coupon.component';

//Pipes
import { ReplaceSpaceLinesPipe } from './purchases/ticket/replace-space-lines.pipe';
import { ClientDataComponent } from './client-data/client-data.component';
import { AccessDataComponent } from './client-data/access-data/access-data.component';
import { PersonalDataComponent } from './client-data/personal-data/personal-data.component';
import { FamilyDataComponent } from './client-data/family-data/family-data.component';
import { ShippingAddressesComponent } from './client-data/shipping-addresses/shipping-addresses.component';
import { BillingInformationComponent } from './client-data/billing-information/billing-information.component';
import { PaymentDetailsComponent } from './client-data/payment-details/payment-details.component';

@NgModule({
  imports: [
    MomentModule,
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
    CouponsComponent,
    ClientDataComponent,
    DropdownComponent,
    PaginationComponent,
    TicketComponent,
    ListTicketsComponent,
    ModalTicketComponent,
    ModalCouponComponent,
    ReplaceSpaceLinesPipe,
    ClientDataComponent,
    AccessDataComponent,
    PersonalDataComponent,
    FamilyDataComponent,
    ShippingAddressesComponent,
    BillingInformationComponent,
    PaymentDetailsComponent
  ],
  entryComponents: [
    ModalCouponComponent,
    ModalTicketComponent
  ]
})
export class PrivateAreaModule { }
