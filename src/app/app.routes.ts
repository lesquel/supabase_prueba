import { Routes } from '@angular/router';
import { siteRoutes } from './modules/site/site.routes';
import { authRoutes } from './modules/auth/routes.routes';

export const routes: Routes = [...siteRoutes, ...authRoutes];
