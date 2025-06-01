import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: ` <main class="flex flex-col items-center justify-center min-h-screen">
    <router-outlet></router-outlet>
  </main> `,
})
export class AuthLayout {
  constructor() {}
}
