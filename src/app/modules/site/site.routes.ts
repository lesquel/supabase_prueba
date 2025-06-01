import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { isNotLoggedGuard } from "../auth/guard/is-not-logged-guard";

export const siteRoutes :Routes = [
  {
    path: '',
    component: Home,
    canActivate: [isNotLoggedGuard]
    // loadChildren: () => import('./pages/home/home').then((m) => m.Home),
  },
];