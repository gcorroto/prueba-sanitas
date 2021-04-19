import { Component, Input } from '@angular/core';

@Component({
  template: ''
})
export class LayoutBaseComponent {

  @Input() srcHeader: string;
  @Input() title: string;

}
