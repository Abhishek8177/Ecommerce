import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import login, { signIn } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

  sellerlogin(body:login)
  {
    return this.http.post(`http://localhost:3000/seller-login`,body)
  }

  sellerSign(body:signIn)
     {
    return  this.http.post(`http://localhost:3000/seller-sign`,body,{observe:'response'})
    }
    
}
