import { CanActivateFn } from '@angular/router';
import { AuthSessionService } from '../services/auth-session-service';
import { inject } from '@angular/core';
import { Router } from 'express';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authSessionService = inject(AuthSessionService);
  const isLoggedIn = authSessionService.isLoggedIn();
  const router = inject(Router);
  if (isLoggedIn) {
    
    return false;
  }
  return true;
};
