import { Routes } from '@angular/router';
import { authConfigRoutes } from './config';

export const routes: Routes = [
  {
    path: authConfigRoutes.path,
    children: [
      {
        path: authConfigRoutes.children.login.path,
        loadChildren: () => import('./pages/login/login').then((m) => m.Login),
      },
      {
        path: authConfigRoutes.children.register.path,
        loadChildren: () =>
          import('./pages/register/register').then((m) => m.Register),
      },
    ],
  },
];
