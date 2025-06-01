import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthSessionService } from '../services/auth-session-service';
import { authConfigRoutes } from '../config';

export const isNotLoggedGuard: CanActivateFn = (route, state) => {
  const authSessionService = inject(AuthSessionService);
  const isLoggedIn = authSessionService.isLoggedIn();
  const router = inject(Router);
  if (!isLoggedIn) {
    router.navigate([authConfigRoutes.children.login.url]);
  }
  return true;
};
