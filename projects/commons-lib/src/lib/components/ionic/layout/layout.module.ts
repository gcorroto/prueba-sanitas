import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LayoutIonicComponent } from './layout.component';
@NgModule({
  declarations: [LayoutIonicComponent],
  exports: [LayoutIonicComponent],
  bootstrap: [LayoutIonicComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutIonicModule { }
