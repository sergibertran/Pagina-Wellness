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
  
    

    // Comprobamos si el usuario es admin o no
    if (localStorage.getItem('role') == '1') {
        // logged in so return true
        
        
        return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
}
}


