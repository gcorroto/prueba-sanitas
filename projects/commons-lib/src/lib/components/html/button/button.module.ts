import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonHtmlComponent } from './button.component';
@NgModule({
  declarations: [ButtonHtmlComponent],
  exports: [ButtonHtmlComponent],
  bootstrap: [ButtonHtmlComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonHtmlModule { }
