import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductSlider1Component } from './components/product-slider1/product-slider1.component';
import {  RouterModule, provideRouter, withHashLocation } from '@angular/router';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeMainSliderComponent } from './components/home-main-slider/home-main-slider.component';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { SearchBycategoryPipe } from './pipes/search-bycategory.pipe';
import { ToastrModule } from 'ngx-toastr';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserWishlistComponent } from './components/user-wishlist/user-wishlist.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    ProductsComponent,
    RegisterComponent,
    WishlistComponent,
    ProductSlider1Component,
    HomeMainSliderComponent,
    SearchProductPipe,
    SearchBycategoryPipe,
    UserAddressComponent,
    UserOrdersComponent,
    UserWishlistComponent,
    AllordersComponent,
    MyModalComponent,
    SubCategoryComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    NewPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule ,
    FormsModule,
    ToastrModule.forRoot(),
    InputTextModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
