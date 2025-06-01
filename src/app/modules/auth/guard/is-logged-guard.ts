import { CanActivateFn, Router } from '@angular/router';
import { AuthSessionService } from '../services/auth-session-service';
import { inject } from '@angular/core';
import { siteConfigRoutes } from '@app/modules/site/config/site-config-routes';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authSessionService = inject(AuthSessionService);
  const isLoggedIn = authSessionService.isLoggedIn();
  const router = inject(Router);
  if (isLoggedIn) {
    router.navigate([siteConfigRoutes.children.home.url]);
    return false;
  }
  return true;
};
