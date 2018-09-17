import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticationService, private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const targetUrl = state.url;
    return this.isAuthenticated(targetUrl);
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  private isAuthenticated(targerUrl: string): Observable<boolean> {
    if (this.authService.isAutheticated()) {
      return of(true);
    }

    this.authService.redirectUrl = targerUrl;
    this.router.navigate(['/login']);

    return of(false);
  }
}
