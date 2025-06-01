import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthDataService } from '../../services/auth-data-service';
import { AuthSessionService } from '../../services/auth-session-service';
import { Router, RouterLink } from '@angular/router';
import { sessionUserAdapter } from '../../adaptes/session-user-adapter';
import { siteConfigRoutes } from '@app/modules/site/config/site-config-routes';
import { authConfigRoutes } from '../../config';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  private fb = inject(FormBuilder);
  private authDataService = inject(AuthDataService);
  private authSessionService = inject(AuthSessionService);
  private router = inject(Router);
  protected authConfigRoutes = authConfigRoutes;
  isLogin = false;

  registerForm = this.fb.group({
    email: ['', []],
    password: ['', []],
  });

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      this.isLogin = true;

      if (this.registerForm.invalid) {
        console.log('invalid');
        return;
      }

      const { email, password } = this.registerForm.value;
      const { data, error } = await this.authDataService.signup({
        email: email as string,
        password: password as string,
      });

      if (error) {
        console.log(error.message);
        console.log('error');
        return;
      }

      const sessionUser = sessionUserAdapter(data);

      this.authSessionService.saveLogin(sessionUser);

      this.router.navigate([siteConfigRoutes.children.home.url]);

      this.isLogin = false;
    } catch (error) {
      this.isLogin = false;
    }
  }
}
