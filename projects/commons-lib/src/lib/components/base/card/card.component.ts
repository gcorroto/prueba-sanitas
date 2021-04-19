import { Component, ElementRef, Input, ViewChild } from '@angular/core';



@Component({
  template: ''
})
export class CardBaseComponent  {

  @Input() srcHeader: string;
  @Input() title: string;
  @Input() animacion?: boolean;

}
