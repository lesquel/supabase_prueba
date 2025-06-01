import { CanActivateFn, Router } from '@angular/router';
import { AuthSessionService } from '../services/auth-session-service';
import { inject } from '@angular/core';
import { authConfigRoutes } from '../config';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authSessionService = inject(AuthSessionService);
  const isLoggedIn = authSessionService.isLoggedIn();
  const router = inject(Router);
  if (!isLoggedIn) {
    router.navigate([authConfigRoutes.children.login.url]);
    return false;
  }
  return true;
};
