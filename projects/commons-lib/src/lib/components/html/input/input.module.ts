import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputHtmlComponent } from './input.component';
@NgModule({
  declarations: [InputHtmlComponent],
  exports: [InputHtmlComponent],
  bootstrap: [InputHtmlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class InputHtmlModule { }
