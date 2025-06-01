import { Injectable } from '@angular/core';
import { supabase } from '@services/supabase';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  private supabase = supabase;

  login({ email, password }: { email: string; password: string }) {
    return this.supabase.auth.signInWithPassword({
      email,
      password
    });
  }

  signup(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password
    });
  }
}
