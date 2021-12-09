import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }
  canActivate(): boolean {

    if (this.auth.isLoggedIn()) {
      return this.auth.isLoggedIn();
    }
    else {
      this.router.navigateByUrl('/login-signup');
      return false;
    }
  }
}
