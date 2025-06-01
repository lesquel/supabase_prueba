import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthDataService } from '../../services/auth-data-service';
import { AuthSessionService } from '../../services/auth-session-service';
import { sessionUserAdapter } from '../../adaptes/session-user-adapter';
import { Router } from '@angular/router';
import { siteConfigRoutes } from '@app/modules/site/config/site-config-routes';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  private fb = inject(FormBuilder);
  private authDataService = inject(AuthDataService);
  private authSessionService = inject(AuthSessionService);
  private router = inject(Router);
  isLogin = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      this.isLogin = true;

      if (this.loginForm.invalid) {
        console.log('invalid');
        return;
      }

      const { email, password } = this.loginForm.value;
      const { data, error } = await this.authDataService.login({
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
