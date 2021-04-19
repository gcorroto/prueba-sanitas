import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaterialModule, CardMaterialModule, ButtonMaterialModule, LayoutHtmlModule, ToggleMaterialModule } from '@commons';
import { LoginMaterialComponent } from '@page/login-material/login-material.component';
import { LoginMaterialRoutingModule } from '@page/login-material/login-material.routing.module';

const components = [
	LoginMaterialComponent
];

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
		ReactiveFormsModule,
    LoginMaterialRoutingModule,
    CardMaterialModule,
    InputMaterialModule,
    ToggleMaterialModule,
    ButtonMaterialModule,
    LayoutHtmlModule
	],
	declarations: [components],
	exports: [components]
})
export class LoginMaterialModule { }
