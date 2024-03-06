import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { products } from 'src/app/interfaces/products-lst';
import { ShoppingCart_Product } from 'src/app/interfaces/shopping-cart';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { MyLocalStorageService } from 'src/app/services/my-local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  showLoader:boolean=true;
  productlst:products[]=[]
  constructor( private _products:ProductService ,private _Router:Router,
    private _httpClient:HttpClient,
    private _BaseurlbackendService:BaseurlbackendService,
    private _ShoppingCartService :ShoppingCartService,
    private toastr: ToastrService,
    private _Payment:PaymentService,
    private _MyLocalStorageService:MyLocalStorageService,
    private registerAPI :HttpClientService,
    private _WishlistService:WishlistService
    ){  }


    ngOnInit(): void {
      this._WishlistService.GetUserWishlist().subscribe({
        next:(Response)=>{
          this.productlst=Response.data;
          this.showLoader=false;
        }
      })
      
    }


    removeItem(id:string)
    {
      this.showLoader=true;

this._WishlistService.removeProduct(id).subscribe({
  next:(Response)=>{
    this._WishlistService.GetUserWishlist().subscribe({
next:(Response)=>{
  this.showLoader=false
  this.productlst=Response.data
}
    })
   // console.log(Response);
  },
  error:(err)=>{
    console.log(err)
  }
})
    }

    addProductToCart(id:string)
    {
      this.showLoader=true;
      this._ShoppingCartService.add_product(id).subscribe({
        next:(Response)=>{
this._MyLocalStorageService.saveData('cartProductsNumber',Response.numOfCartItems);
this.registerAPI.updateUserCart()       ;
this.removeItem(id);
//this.showLoader=false;
}
      })
    }
}



