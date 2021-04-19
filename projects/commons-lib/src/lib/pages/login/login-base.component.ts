import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  template: '',
})
export class LoginBaseComponent {

  title: string;
  iconEmail: string;
  iconPassword: string;
  isSubmitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    remember: new FormControl(false)
  }, { updateOn: 'submit' });

  constructor(){
  }
  onSubmit() {
    this.isSubmitted = true;
    if(this.loginForm.valid) {
     console.log('OK');
     console.debug(`${JSON.stringify(this.loginForm.getRawValue())}`)
    } else  {
      console.error('loginForm invalid');
    }
  }
}
