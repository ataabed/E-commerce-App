import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { RegisterUser } from 'src/app/interfaces/register-user';
import { Router } from '@angular/router';
import {MyLocalStorageService} from 'src/app/services/my-local-storage.service';
import { jwtDecode } from "jwt-decode";
import { CartComponent } from '../cart/cart.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  isloading:boolean=false;
  errorMsg:string="";
  private url:string="";
constructor( public registerAPI:HttpClientService,
  private baseurl:BaseurlbackendService,
  private _Router:Router,
  private _MyLocalStorageService:MyLocalStorageService,
  private _ShoppingCart:ShoppingCartService,
  private _Wishlist:WishlistService
  )
{
  this.url=`${baseurl.baseURL}/api/v1/auth/signin`;
  

}
loginForm:FormGroup=new FormGroup({

  email:new FormControl(null,[Validators.required,Validators.email]),
  password : new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{6,20}$/)]),
})
registerResponse_Success:object={};
registerResponse_Error:object={};
registerResponse_Complete:object={};
ngOnInit(): void {

 
}
submitForm()
{
  this.isloading=true;
 if(this.loginForm.valid)
 {
  this.registerAPI.signIn(this.url,this.loginForm.value).subscribe({
    next:(response)=>{

    //  this.registerResponse_Success=response;
      if(response.message==='success')
      {
        // save user token 

this._MyLocalStorageService.saveData('userToken',jwtDecode(response.token))
this._MyLocalStorageService.saveData('Token',response.token);
this.registerAPI.updateUserData();

this._ShoppingCart.GetUserCart().subscribe({
  next:(data)=>{
    if(data.status==='success'){
        this._MyLocalStorageService.saveData('cartId',data.data._id);
 this._MyLocalStorageService.saveData('cartProductsNumber',data.numOfCartItems);
 //alert(data.numOfCartItems)
  this.registerAPI.updateUserCart(); 
    }
 
  },
  error:(err)=>
  {
    this._MyLocalStorageService.saveData('cartId',"");
    this._MyLocalStorageService.saveData('cartProductsNumber',"");
    
     this.registerAPI.updateUserCart(); 
    //console.log(err)
  }
})

// wishlist 
this._Wishlist.GetUserWishlist().subscribe({
  next:(data)=>{
    if(data.status==='success')
    {
this._Wishlist.wishList_Products=data.data;
   this._MyLocalStorageService.saveData('wishListId',data.data);

 //alert(data.numOfCartItems)
  this.registerAPI.updateUserWishlist(); 
    }

  },
  error:(err)=>
  {
    this._MyLocalStorageService.saveData('wishListId','');

    
     this.registerAPI.updateUserWishlist(); 
    //console.log(err)
  }
})

// if success login to home page  and role == user route to home 
// if role admin route to admin page and so on
/* if(this.registerAPI.userData.userRole.value==='user')
{ */
  this._Router.navigate(['home'])
//}

this.isloading=false;      
}
    },
    error:(error)=>{this.registerResponse_Error=error.message;
      console.log(error)
      this.isloading=false;      
this.errorMsg=error.error.message
    
    },
    complete:()=>{
      this._Router.navigate(['home'])
      //}
      
      this.isloading=false;   
    }
    
    
    
     } )
 }
}

showForgetPassword()
{
  this._Router.navigate(["forgetPassword"])
}
}