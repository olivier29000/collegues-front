import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate{

  constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< boolean|UrlTree> {
        // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login
        
        return this.authService.isLoggedIn().pipe(
          map(() => true)
          ,catchError(()=> of(this.router.parseUrl('/login'))));
        }

        
}

