import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { products } from 'src/app/interfaces/products-lst';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { MyLocalStorageService } from 'src/app/services/my-local-storage.service';
import { WishList } from 'src/app/interfaces/wishlist';
import { JsonPipe } from '@angular/common';
import { HttpClientService } from 'src/app/services/http-client.service';
declare let $:any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
   
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
  }
  changeOptions() {
   // this.customOptions.loop = false; // this won't refresh the carousel 

    this.customOptions = { ...this.customOptions, loop: false } // this will make the carousel refresh
  }

constructor(private _HttpClient:HttpClient,
  private _BaseurlbackendService:BaseurlbackendService,
  private _ActivatedRoute:ActivatedRoute,
  private _ShoppingCartService:ShoppingCartService 
  ,private toastr :ToastrService,
  private _WishlistService:WishlistService,
  private _mylocalstorage:MyLocalStorageService,
  private _HttpClientService:HttpClientService,
  private _Router:Router
  ){


}
btn_Wishlist:string="btn  d-block d-sm-block col-12 col-sm-1  main-color"
btn_NotWishlist:string="btn  d-block d-sm--block col-12 col-sm-1  "
showLoader=true;
productId:string='';
productData:any;
Wishlist:WishList[]=[];
isInWishList:any;
ngOnInit(): void {
  this.Wishlist=JSON.parse( this._mylocalstorage.getData('wishListId'))
  this._ActivatedRoute.params.subscribe(params=>{

    this.productId=params['productId']
this._HttpClient.get(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.productsEndPoint}/${this.productId}`).subscribe({

  next:(response)=>{
    this.productData=response;

this.showLoader=false; 

this.Wishlist.forEach(element => {
  if(this.productId===element._id)
  {
/*  $(`#${this.productId}`).html("lkjdksjkdjskd") */
this.isInWishList=true;
  }
});

 },
error:(err)=>{
  this.showLoader=false
}
})
  }
    )
}
addProductToCart(id:string)
{
this._ShoppingCartService.add_product(id).subscribe({
  next:(response)=>{
    this.toastr.success(response.message,"Done",{progressBar:true,
      timeOut:1000,
      positionClass:'toast-bottom-right'});
      this._mylocalstorage.saveData('cartProductsNumber',response.numOfCartItems);
      this._HttpClientService.updateUserCart();
    console.log(response)
  },
  error:(err)=>{
    console.log(err)
  }
})
}

addProductToWishList(id:string)
{  
  $(`#${id}`).toggleClass("main-color")


 this._WishlistService.wishList_Products.forEach(element => {
  element._id===id;

  console.log("in wishlist")
 });
this._WishlistService.addProduct(id).subscribe({
  next:(response)=>{
 
    this.toastr.success(response.message,"Done",{progressBar:true,
      timeOut:1000,
      positionClass:'toast-bottom-right'});
/*      this._mylocalStorage.saveData('cartProductsNumber',response.numOfCartItems);
   this._HttpClientService.updateUserCart(); */
  // console.log(response)
  },
  error:(err)=>{
    console.log(err)
  }
})
}

goToCategoryProducts(id:string)
{
  this._Router.navigate(["products",id])
}

}