import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleHtmlComponent } from './toggle.component';
@NgModule({
  declarations: [ToggleHtmlComponent],
  exports: [ToggleHtmlComponent],
  bootstrap: [ToggleHtmlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToggleHtmlModule { }
