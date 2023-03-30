import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { SellerService } from '../All-Services/seller.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signIn:FormGroup=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl()


  })

    //  constructor(private abhi:SellerService){}

    //  signdata()
    //  {
    //   this.abhi.sellerSign(this.signIn.value)
    //  }
}
