import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SigninService } from '../service/signin.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  logIn:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()


  })

  isSellerLoggedIn=new BehaviorSubject<boolean>(false)
  navigate: any;

     constructor(private service:SigninService, private route:Router){}

     postsata()
     {
      this.service.sellerlogin(this.logIn.value).subscribe((res)=>{

        // this.isSellerLoggedIn.next(true)
        console.log(res)
        this.route.navigate(['sellerHome'])
      
      })
     }

     }


