import { Component, OnInit } from '@angular/core';

//Models
import { ClientModel } from "../../shared/models/client.model";

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html'
})
export class RegisterConfirmationComponent implements OnInit {

  constructor(
      public _clientModel: ClientModel
  ) { }

  ngOnInit() {
  }

}
