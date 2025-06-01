import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { authConfigRoutes } from '@app/modules/auth/config';
import { AuthSessionService } from '@app/modules/auth/services/auth-session-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html'
})
export class Home {
  private authSessionService = inject(AuthSessionService);
  private router = inject(Router);

  logout() {
    this.authSessionService.logout();
    this.router.navigate([authConfigRoutes.children.login.url]);
  }
}
