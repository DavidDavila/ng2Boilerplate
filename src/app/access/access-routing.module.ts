
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckEmailComponent } from "./check-email/check-email.component";
import { LoginComponent } from "./login/login.component";
import { RememberPasswordComponent } from "./remember-password/remember-password.component";
import { QualityDataComponent } from "./quality-data/quality-data.component";
import { RegisterComponent } from "./register/register.component";
import { RegisterConfirmationComponent } from "./register-confirmation/register-confirmation.component";
import { CheckInClubComponent } from "./check-in-club/check-in-club.component";
import { PersonalDataComponent } from "./personal-data/personal-data.component";
import { AboutYouComponent } from "./about-you/about-you.component";
import { CommPreferencesComponent } from "./comm-preferences/comm-preferences.component";
import { SendConfirmationComponent } from "./send-confirmation/send-confirmation.component";

const routes:Routes = [
  {
    path: 'check-email',
    component: CheckEmailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recordar-password',
    component: RememberPasswordComponent
  },
  {
    path: 'datos-adicionales',
    component: QualityDataComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'registro-confirmacion',
    component: RegisterConfirmationComponent
  },
  {
    path: 'comprobar-club',
    component: CheckInClubComponent
  },
  {
    path: 'datos-personales',
    component: PersonalDataComponent
  },
  {
    path: 'acerca-de-ti',
    component: AboutYouComponent
  },
  {
    path: 'preferencias-comunicacion',
    component: CommPreferencesComponent
  },
  {
    path: 'enviar-email',
    component: SendConfirmationComponent
  },
  {
    path: '',
    redirectTo: '/acceso/check-email',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
