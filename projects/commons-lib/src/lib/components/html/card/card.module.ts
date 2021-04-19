import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardHtmlComponent } from './card.component';
@NgModule({
  declarations: [CardHtmlComponent],
  exports: [CardHtmlComponent],
  bootstrap: [CardHtmlComponent],
  imports: [CommonModule]
})
export class CardHtmlModule { }
