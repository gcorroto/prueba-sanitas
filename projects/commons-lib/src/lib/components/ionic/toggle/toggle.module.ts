import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleIonicComponent } from './toggle.component';
@NgModule({
  declarations: [ToggleIonicComponent],
  exports: [ToggleIonicComponent],
  bootstrap: [ToggleIonicComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToggleIonicModule { }
