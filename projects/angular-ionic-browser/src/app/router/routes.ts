import { Routes } from '@angular/router';


export const APP_MODULE_ROUTES: Routes = [
  {
    path: 'login-material',
    loadChildren: () => import('@page/login-material/login-material.module').then(m => m.LoginMaterialModule),
  },
  {
    path: 'login-ionic',
    loadChildren: () => import('@page/login-ionic/login-ionic.module').then(m => m.LoginIonicModule),
  },
  {
    path: 'login-html',
    loadChildren: () => import('@page/login-html/login-html.module').then(m => m.LoginHtmlModule),
  }, {
    path: '**',
    redirectTo: 'login-ionic'
  }
];

