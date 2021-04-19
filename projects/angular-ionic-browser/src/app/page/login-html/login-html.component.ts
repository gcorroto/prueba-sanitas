import { Component } from '@angular/core';
import { LoginBaseComponent } from '@commons';

@Component({
  templateUrl: '../../../../../commons-lib/src/lib/pages/login/login-base.component.html',
  styleUrls: ['../../../../../commons-lib/src/lib/pages/login/login-base.component.scss']
})
export class LoginHtmlComponent extends LoginBaseComponent {



  constructor(){
    super();
    this.title = 'login-html-angular';
    this.iconEmail = '&#xF002; Email';
    this.iconPassword = '&#xF002; Password';
  }
}
