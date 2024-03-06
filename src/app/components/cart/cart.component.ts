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

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showLoader:boolean=true;
  constructor( private _products:ProductService ,private _Router:Router,
    private _httpClient:HttpClient,
    private _BaseurlbackendService:BaseurlbackendService,
    private _ShoppingCartService :ShoppingCartService,
    private toastr: ToastrService,
    private _Payment:PaymentService,
    private _MyLocalStorageService:MyLocalStorageService,
    private registerAPI :HttpClientService
    ){  }
  

productlst:ShoppingCart_Product[]=[]
totalPrice:number=0;
numOfCartItems:number=0;
  ngOnInit(): void {
    this._ShoppingCartService.GetUserCart().subscribe({
      next:(Response)=>{
        this.productlst=Response.data.products;
        this.totalPrice=Response.data.totalCartPrice;
        this.numOfCartItems=Response.numOfCartItems;
        this._MyLocalStorageService.saveData('cartId',`${Response.data._id}`);
        this._MyLocalStorageService.saveData('cartProductsNumber',`${Response.numOfCartItems}`);
        
         this.registerAPI.updateUserCart(); 
        this.showLoader=false;

        console.log(this.productlst)
      },
      error:(err)=>{
        this._MyLocalStorageService.saveData('cartId',``);
        this._MyLocalStorageService.saveData('cartProductsNumber',``);
        
         this.registerAPI.updateUserCart(); 
        this.showLoader=false;
        console.log(err)
      }
    }) 
  }

  removeItem(id:string){
    this.showLoader=true;
    this._ShoppingCartService.removeItemFromCart(id).subscribe({
      next:(Response)=>{
        this.productlst=Response.data.products;
        this.totalPrice=Response.data.totalCartPrice;
        this.numOfCartItems=Response.numOfCartItems;
        
        this._MyLocalStorageService.saveData('cartProductsNumber',Response.numOfCartItems);
        
        this.registerAPI.updateUserCart();   
        this.showLoader=false;
        console.log(Response)
      }
    })
  }

  updateItemCount(id:string,count:number){
    this.showLoader=true;
    if(count<0||count===0)
    {
      this.removeItem(id)
    }
    else
    {
        this._ShoppingCartService.updateCartItemCount(id,count).subscribe({

      next:(Response)=>{
     this.productlst=Response.data.products;
        this.totalPrice=Response.data.totalCartPrice;
        this.numOfCartItems=Response.numOfCartItems; 
        this.showLoader=false;
   
         this._MyLocalStorageService.saveData('cartProductsNumber',Response.numOfCartItems);
        
         this.registerAPI.updateUserCart();   
        console.log(Response)
      }

    })
    }
  
  }
 ClearCart(){
  this.showLoader=true;

    this._ShoppingCartService.ClearCart().subscribe({
      next:(Response)=>{
     this.productlst=[];
        this.totalPrice=0;
        this.numOfCartItems=0; 
        this.showLoader=false;

       this._MyLocalStorageService.saveData('cartProductsNumber','0');
        
        this.registerAPI.updateUserCart();   
       //this._Router.navigate(["home"])
        console.log(Response)
      }
    })
  }

checkOut()
{
  
  this._Router.navigate(["shipping-address"]);
 // this._Payment.checkout()

}

}
