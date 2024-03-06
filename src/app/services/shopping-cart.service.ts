import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseurlbackendService } from './baseurlbackend.service';
import { MyLocalStorageService } from './my-local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private _HttpClient:HttpClient,
    private _BaseurlbackendService :BaseurlbackendService,
    private _MyLocalStorageService:MyLocalStorageService,
    private _HttpClientService:HttpClientService) {
     
     }
     
  header:any="" ;
  
header2={token: this._HttpClientService.userData.Token}  
 
add_product(id:string):Observable<any>
  {
    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 

 return   this._HttpClient.post(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.shoppingCartEndPoint}`,
    {productId:id},{headers:this.header});
  }

  GetUserCart():Observable<any>
  {
   this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 
 return   this._HttpClient.get(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.shoppingCartEndPoint}`,
    {headers:this.header});
  }


  removeItemFromCart(id:string):Observable<any>
  {
    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 

return this._HttpClient.delete(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.shoppingCartEndPoint}/${id}`,{headers:this.header}  )
  }
  updateCartItemCount(id:string,count:number):Observable<any>
  {
    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 

    return this._HttpClient.put(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.shoppingCartEndPoint}/${id}`,{count:count},{headers:this.header}  )
 
  }
  ClearCart():Observable<any>
  {
    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 

    return this._HttpClient.delete(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.shoppingCartEndPoint}`,{headers:this.header}  )
 
  }
}
