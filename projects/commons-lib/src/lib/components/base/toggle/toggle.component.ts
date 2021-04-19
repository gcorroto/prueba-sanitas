import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: ''
})
export class ToggleBaseComponent {


  @Input() label: string;
  @Input() controlName: string;
  @Input() form: FormGroup;


  changeValue(){
    this.form.controls[this.controlName].setValue(!this.form.controls[this.controlName].value);
  }

}
