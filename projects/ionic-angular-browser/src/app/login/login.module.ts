import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { CardIonicModule, InputIonicModule, ButtonIonicModule, LayoutIonicModule, ToggleIonicModule } from '@commons';
import { LoginPageRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    CardIonicModule,
    InputIonicModule,
    ToggleIonicModule,
    ButtonIonicModule,
    LayoutIonicModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
