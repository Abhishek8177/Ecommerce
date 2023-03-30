import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../service/signin.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent {

  signIn:FormGroup=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl()


  })

     constructor(private abhi:SigninService ,private route:Router){}

     signdata()
     {
      this.abhi.sellerSign(this.signIn.value).subscribe((res)=>{console.log(res)
        this.route.navigate(['sellerHome'])
      
      })
     }


}
