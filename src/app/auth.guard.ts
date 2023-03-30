import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerComponent } from './seller/seller.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  canActivate() {
    return false
  }
  
}
