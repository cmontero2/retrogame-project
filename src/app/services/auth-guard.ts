import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      if (this.isTokenExpirado()) {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  isTokenExpirado(): boolean {
    let token = this.authService.token;
    let payload = this.authService.obtenerDatosToken(token);
    let now = new Date().getTime() / 1000;
    if (payload.exp < now) {
      return true;
    }
    return false;
  }
  /*
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }
  constructor(
    private router: Router
  ) {}

  login(){
    this.loggedIn.next(true);
    this.router.navigate(['/']);
    
  }

  logout() {                           
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }
  */
}
