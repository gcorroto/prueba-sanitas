import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleMaterialComponent } from './toggle.component';
@NgModule({
  declarations: [ToggleMaterialComponent],
  exports: [ToggleMaterialComponent],
  bootstrap: [ToggleMaterialComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToggleMaterialModule { }
