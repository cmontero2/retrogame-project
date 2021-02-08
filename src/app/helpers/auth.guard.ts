import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
/*
import { AuthGuard } from '../services/auth-guard';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    user: boolean = false;
    constructor(
        private router: Router,
        private accountService: AuthGuardService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.accountService.isLoggedIn()
      .subscribe(
        data => {
          this.user = data;
          console.log('login', this.user);

        },
        error => {
          console.log(error);
        });
        if (this.user) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
*/