import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: ''
})
export class InputBaseComponent {


  @Input() label: string;
  @Input() icon: string;
  @Input() type: 'text' | 'email' | 'password';
  @Input() placeholder: string;
  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() isSubmitted: boolean = true;

  get errorControl() {
    return this.form ? this.form.controls : [];
  }

}
