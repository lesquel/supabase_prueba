import { Routes } from '@angular/router';
import { authConfigRoutes } from './config';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { AuthLayout } from './auth-layout';
import { isNotLoggedGuard } from './guard/is-not-logged-guard';

export const authRoutes: Routes = [
  {
    path: authConfigRoutes.path,
    component: AuthLayout,
    canActivate: [isNotLoggedGuard],
    children: [
      {
        path: authConfigRoutes.children.login.path,
        component: Login,
        // loadChildren: () => import('./pages/login/login').then((m) => m.Login),
      },
      {
        path: authConfigRoutes.children.register.path,
        component: Register,
        // loadChildren: () => import('./pages/register/register').then((m) => m.Register),
      },
    ],
  },
];
