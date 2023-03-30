import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('./seller/seller.module').then((m) => m.SellerModule),
  },
  {
     path:'login',component:LoginComponent
  },
  {
    path:'signIn',component:SigninComponent
 },

 {   path:'sellerHome',component:SellerHomeComponent,canActivate:[AuthGuard]
},



  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
