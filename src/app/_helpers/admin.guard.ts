import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private AuthService: AuthService
) { }

canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.AuthService.currentUserValue;
    if (currentUser && localStorage.getItem('role') === '1') {
        // logged in so return true
        console.log('eres admin');
        
        return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
}
}


