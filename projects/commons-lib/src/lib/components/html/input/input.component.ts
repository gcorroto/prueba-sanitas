import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBaseComponent } from './../../base/input/input.component';

@Component({
  selector: 'san-pt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputHtmlComponent),
      multi: true
    }
  ]
})
export class InputHtmlComponent extends InputBaseComponent {}
