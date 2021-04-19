import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_MODULE_ROUTES } from './routes';


@NgModule({
	imports: [
		BrowserAnimationsModule,
		RouterModule.forRoot(APP_MODULE_ROUTES, {
			useHash: false,
			enableTracing: false
		 }
		)
	],
	providers: [
	],
	exports: [RouterModule]
})
export class RoutingModule {

}
