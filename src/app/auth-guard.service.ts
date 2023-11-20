import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{

  constructor(private loginService:LoginService, private router:Router) { }

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean|UrlTree>| Promise<any>|any{
      if(this.loginService.isLoggedIn()){
        return true;
      }
      this.router.navigate(['login']);
    return false;
  }
}
