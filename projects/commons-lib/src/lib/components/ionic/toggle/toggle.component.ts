import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToggleBaseComponent } from '../../base/toggle/toggle.component';

@Component({
  selector: 'san-pt-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleIonicComponent),
      multi: true
    }
  ]
})
export class ToggleIonicComponent extends ToggleBaseComponent {


}
