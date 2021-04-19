import { Component } from '@angular/core';
import { LoginBaseComponent } from '@commons';


@Component({
  templateUrl: '../../../../../commons-lib/src/lib/pages/login/login-base.component.html',
  styleUrls: ['../../../../../commons-lib/src/lib/pages/login/login-base.component.scss']
})
export class LoginIonicComponent extends LoginBaseComponent {

  constructor(){
    super();
    this.title = 'login-ionic-angular';
    this.iconEmail = 'person-outline';
    this.iconPassword = 'lock-closed-outline';
  }
}
