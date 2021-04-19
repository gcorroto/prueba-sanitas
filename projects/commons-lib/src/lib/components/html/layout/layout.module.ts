import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LayoutHtmlComponent } from './layout.component';
@NgModule({
  declarations: [LayoutHtmlComponent],
  exports: [LayoutHtmlComponent],
  bootstrap: [LayoutHtmlComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutHtmlModule { }
