import { CardMaterialModule } from '@commons';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './router/routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    CardMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
