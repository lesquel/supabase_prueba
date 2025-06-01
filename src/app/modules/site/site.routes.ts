import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { isLoggedGuard } from "../auth/guard/is-logged-guard";

export const siteRoutes :Routes = [
  {
    path: '',
    component: Home,
    canActivate: [isLoggedGuard]
    // loadChildren: () => import('./pages/home/home').then((m) => m.Home),
  },
];