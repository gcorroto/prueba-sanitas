import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardIonicModule, InputIonicModule, ButtonIonicModule, LayoutIonicModule, ToggleIonicModule } from '@commons';
import { LoginIonicComponent } from '@page/login-ionic/login-ionic.component';
import { LoginIonicRoutingModule } from '@page/login-ionic/login-ionic.routing.module';

const components = [
	LoginIonicComponent,
];

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
		ReactiveFormsModule,
    LoginIonicRoutingModule,
    CardIonicModule,
    InputIonicModule,
    ToggleIonicModule,
    ButtonIonicModule,
    LayoutIonicModule
	],
	declarations: [components],
	exports: [components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginIonicModule { }
