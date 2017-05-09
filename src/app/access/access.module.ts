import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//External components
import { AgmCoreModule } from 'angular2-google-maps/core';
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

//Components
import { AccessRoutingModule } from './access-routing.module';
import { CheckEmailComponent } from './check-email/check-email.component';
import { RememberPasswordComponent } from './remember-password/remember-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendConfirmationComponent } from './send-confirmation/send-confirmation.component';
import { CheckInClubComponent } from './check-in-club/check-in-club.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { CommPreferencesComponent } from './comm-preferences/comm-preferences.component';
import { QualityDataComponent } from './quality-data/quality-data.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';

//Services
import { StateMachineService } from "./shared/services/state-machine.service";

//Components
import { TooltipComponent } from "../shared/components/tooltip/tooltip.component";
import { ModAvisosComponent } from "../shared/components/modAvisos/modAvisos.component";
import { MapsComponent } from '../shared/components/maps/maps.component';

@NgModule({
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
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
  declarations: [
    CheckEmailComponent,
    RememberPasswordComponent,
    LoginComponent,
    RegisterComponent,
    SendConfirmationComponent,
    CheckInClubComponent,
    PersonalDataComponent,
    AboutYouComponent,
    CommPreferencesComponent,
    QualityDataComponent,
    RegisterConfirmationComponent,
    TooltipComponent,
    ModAvisosComponent,
    MapsComponent
  ],
  providers:[
     StateMachineService
  ]
})

export class AccessModule { }
