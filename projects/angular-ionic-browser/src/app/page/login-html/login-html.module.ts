import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardHtmlModule, InputHtmlModule, ButtonHtmlModule, LayoutHtmlModule, ToggleHtmlModule } from '@commons';
import { LoginHtmlComponent } from '@page/login-html/login-html.component';
import { LoginHtmlRoutingModule } from '@page/login-html/login-html.routing.module';


const components = [
	LoginHtmlComponent,
];

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
    CardHtmlModule,
    InputHtmlModule,
    ToggleHtmlModule,
    ButtonHtmlModule,
    LayoutHtmlModule,
		ReactiveFormsModule,
    LoginHtmlRoutingModule
	],
	providers: [
	],
	declarations: [components],
	exports: [components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginHtmlModule { }
