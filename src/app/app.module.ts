
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { EstilosComponentComponent } from './estilos-component/estilos-component.component';

//Services
import { AuthService } from "./shared/services/auth.service";

//Models
import { ClientModel } from "./shared/models/client.model";

//Routing
import { AppRoutingModule } from './app-routing.module';
import { CheckSessionComponent } from './check-session/check-session.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    EstilosComponentComponent,
    CheckSessionComponent,
    EstilosComponentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
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
    ReactiveFormsModule,
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
  providers: [
     AuthService,
     ClientModel
  ],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }
