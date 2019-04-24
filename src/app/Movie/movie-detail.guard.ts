import { Injectable } from '@angular/core';
import { CanActivate, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot, // Dostracza biezace infomacje o trasie
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {   //dostarcza informacje o stanie routera
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert( " złe Id " );
      this.router.navigate(['/movies']);
      return false;
    };
    return true;
  }

}
