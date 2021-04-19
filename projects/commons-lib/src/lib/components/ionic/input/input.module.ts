import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputIonicComponent } from './input.component';
@NgModule({
  declarations: [InputIonicComponent],
  exports: [InputIonicComponent],
  bootstrap: [InputIonicComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputIonicModule { }
