import { Component } from '@angular/core';
import { LoginBaseComponent } from '@commons';


@Component({
  templateUrl: '../../../../commons-lib/src/lib/pages/login/login-base.component.html',
  styleUrls: ['../../../../commons-lib/src/lib/pages/login/login-base.component.scss']
})
export class LoginPage extends LoginBaseComponent {

  constructor(){
    super();
    this.title = 'ionic-angular-browser';
    this.iconEmail = 'person-outline';
    this.iconPassword = 'lock-closed-outline';
  }
}
