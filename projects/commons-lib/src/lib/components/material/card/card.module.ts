import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardMaterialComponent } from './card.component';
@NgModule({
  declarations: [CardMaterialComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  exports: [CardMaterialComponent],
  bootstrap: [CardMaterialComponent],
})
export class CardMaterialModule { }
