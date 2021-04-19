import { Component, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: ''
})
export class ButtonBaseComponent {


  @Input() label: string;
  @Input() type: 'submit';
  @Input() disabled?: boolean;
  @Input() size?: string;
  @Input() expand?: string;
  round: string = 'round';

  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    if(event.innerWidth>=960) {
      this.round = 'round';
    } else {
      this.round = '';
    }
  }
}
