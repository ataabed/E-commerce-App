import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { BaseurlbackendService } from './baseurlbackend.service';
import { MyLocalStorageService } from './my-local-storage.service';
import { UserAddress } from '../interfaces/user-address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient ,private _HttpClientService:HttpClientService,
    private _BaseurlbackendService:BaseurlbackendService,
    private _MyLocalStorage:MyLocalStorageService
    
    ) { }
header={token: JSON.parse(`${this._MyLocalStorage.getData('Token')}`) };
//cartId=JSON.parse(`${this._MyLocalStorage.getData('cartId')}`)
  checkout(paymentAddress:UserAddress,cartId:string):Observable<any>
  {
   console.log(cartId)
    let  url:String=`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.checkOutEndPoint}/${cartId}?url=${this._BaseurlbackendService.checkOutEndPoint_returnUrl}`

return this._HttpClient.post(`${url}`,{body:paymentAddress},{headers:this.header}

);
  }

  cashOrder(paymentAddress:UserAddress,cartId:string):Observable<any>
  {

    let  url:String=`${this._BaseurlbackendService.baseURL}/api/v1/orders/${cartId}`

return this._HttpClient.post(`${url}`,{body:paymentAddress},{headers:this.header}

);
  }




}
