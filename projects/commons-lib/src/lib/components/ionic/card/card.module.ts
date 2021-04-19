import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CardIonicComponent } from './card.component';
@NgModule({
  declarations: [CardIonicComponent],
  exports: [CardIonicComponent],
  bootstrap: [CardIonicComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardIonicModule { }
