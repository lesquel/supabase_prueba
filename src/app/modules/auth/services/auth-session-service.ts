import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { SessionUser } from '../models/session-user';

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {
  private cookieName = 'supabase-auth-token';
  private cookieOptions : CookieOptions = {
    path: '/',
    secure: true,
    expires: new Date(Date.now() + 3600 * 1000),
  };

  private cookieService = inject(CookieService);

  saveLogin(user: SessionUser) {
    console.log('saveLogin');
    console.log(user);
    this.cookieService.set(this.cookieName, JSON.stringify(user), this.cookieOptions);
  }

  getSession() {
    return this.cookieService.get(this.cookieName);
  }

  logout() {
    this.cookieService.delete(this.cookieName);
  }

  isLoggedIn() {
    return !!this.cookieService.get(this.cookieName);
  }
}
