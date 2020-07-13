import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login/login.service';
@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _router: Router,private loginService:LoginService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var jwt1=localStorage.getItem("jwt");
    if(jwt1!=null)
    {
      var token:any=JSON.parse(jwt1);
      if(token.login)
      {
        var date:Date= new Date(token.validTill);
        if(date>=new Date()){
          return true;
        }
      }
      
    }
    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}