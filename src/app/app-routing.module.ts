import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withHashLocation } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { authGuard } from './guards/auth.guard';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:"full"}, 
  {path:'home',canActivate:[authGuard],component:HomeComponent,title:'Home'},
  {path:'products',component:ProductsComponent,title:'products'},
  {path:'products/:categoryId',component:ProductsComponent,title:'products'},

  
  {path:'brands',canActivate:[authGuard],component:BrandsComponent,title:'brands'},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent,title:'categories'},
  {path:'cart',canActivate:[authGuard],component:CartComponent,title:'cart'},
  {path:'login',component:LoginComponent,title:'login'},
  {path:'register',component:RegisterComponent,title:'register'},
  {path:'productDetails/:productId',component:ProductDetailsComponent,title:"productDetail"},
{path:'wishlist',canActivate:[authGuard],component:WishlistComponent,title:'wishlist'},
{path:'shipping-address',canActivate:[authGuard],component:UserAddressComponent,title:'shipping address'},
{path:'allorders',pathMatch:"full",canActivate:[authGuard],component:AllordersComponent,title:'allorders'},
{path:"modal",component:MyModalComponent},
{path:'forgetPassword',component:ForgetPasswordComponent},

{path:'VerifCode',component:ResetPasswordComponent},
{path:'newPassword',component:NewPasswordComponent},

{path:"**",component:NotfoundComponent,title:'not found'}
 





];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
