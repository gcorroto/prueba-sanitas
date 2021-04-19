import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonIonicComponent } from './button.component';
@NgModule({
  declarations: [ButtonIonicComponent],
  exports: [ButtonIonicComponent],
  bootstrap: [ButtonIonicComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonIonicModule { }
