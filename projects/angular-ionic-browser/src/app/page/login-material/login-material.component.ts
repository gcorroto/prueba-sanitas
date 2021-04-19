import { Component } from '@angular/core';
import { LoginBaseComponent } from '@commons';


@Component({
  templateUrl: '../../../../../commons-lib/src/lib/pages/login/login-base.component.html',
  styleUrls: ['../../../../../commons-lib/src/lib/pages/login/login-base.component.scss']
})
export class LoginMaterialComponent extends LoginBaseComponent {

  constructor(){
    super();
    this.title = 'login-material-angular';
    this.iconEmail = 'perm_identity';
    this.iconPassword = 'lock';
  }
}
