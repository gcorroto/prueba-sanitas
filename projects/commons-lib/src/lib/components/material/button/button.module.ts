import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonMaterialComponent } from './button.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [ButtonMaterialComponent],
  exports: [ButtonMaterialComponent],
  bootstrap: [ButtonMaterialComponent],
  imports: [CommonModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonMaterialModule { }
