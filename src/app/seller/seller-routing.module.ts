import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  { path: '', component: SellerComponent },
  {
    path:'seller-singup', component:SellerSignupComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
