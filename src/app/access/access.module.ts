import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
    ModAvisosComponent
  ],
  providers:[
     StateMachineService
  ]
})
export default class AccessModule { }
