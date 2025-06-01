import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthSessionService } from '../services/auth-session-service';

export const isNotLoggedGuard: CanActivateFn = (route, state) => {
  const authSessionService = inject(AuthSessionService);
  const isLoggedIn = authSessionService.isLoggedIn();
  return true;
};
