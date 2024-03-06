import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAddress } from 'src/app/interfaces/user-address';
import { HttpClientService } from 'src/app/services/http-client.service';
import { MyLocalStorageService } from 'src/app/services/my-local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserAddressService } from 'src/app/services/user-address.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit{
  isLoading:boolean=false;
  errorMsg:string=""
constructor(private _UserAddressService:UserAddressService,
  private _HttpClientService:HttpClientService,
  private _Payment:PaymentService,
  private _myLocalStorage:MyLocalStorageService,
  private _Router:Router
  ){}
ngOnInit(): void {
  
}
addressForm:FormGroup=new FormGroup({

  name:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
  details:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(100)]),


  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),


})
orderShippingAddress:UserAddress={name:'',details:'',phone:'',city:''}
addUserShippingAddress()
{
/*   console.log(this.addressForm.value)
 *///
 this._UserAddressService.Add_address(this.addressForm.value).subscribe({

  next:(response)=>{
   this.orderShippingAddress=this.addressForm.value;
   this._Payment.checkout(this.orderShippingAddress,JSON.parse( this._myLocalStorage.getData('cartId'))).subscribe({
    next:(response:any)=>{
      if(response.status==='success'){
        this._myLocalStorage.saveData('cartProductsNumber',"")
this._HttpClientService.updateUserCart()
        window.location.href=response.session.url

      }
      console.log(response)
    }
   })
 
  },
  error:(err)=>{
    console.log(err);
  }
 })
}



addUserShippingAddress_cash()
{
/*   console.log(this.addressForm.value)
 *///
 this._UserAddressService.Add_address(this.addressForm.value).subscribe({

  next:(response)=>{
   this.orderShippingAddress=this.addressForm.value;
   this._Payment.cashOrder(this.orderShippingAddress,JSON.parse( this._myLocalStorage.getData('cartId'))).subscribe({
    next:(response:any)=>{
      if(response.status==='success'){
       
        this._myLocalStorage.saveData('cartProductsNumber',"")
this._HttpClientService.updateUserCart()
       this._Router.navigate(["allorders"])

      }
   
    }
   })
 
  },
  error:(err)=>{
    console.log(err);
  }
 })
}


}
