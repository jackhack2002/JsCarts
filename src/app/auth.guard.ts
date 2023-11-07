import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean > | Promise<boolean>  {

    if (localStorage.getItem('IsAuthorized') === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false; 
    }
  }

  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem("IsAuthorized"))
    {
      return true;
    }
    else
    {
     return this.router.parseUrl('/login');
    }
  }

  canMatch(route: Router, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem("IsAdmin"))
    {
      return true;
    }
    else
    {
      return this.router.navigateByUrl('404',{skipLocationChange:true});
    }
  }
}
