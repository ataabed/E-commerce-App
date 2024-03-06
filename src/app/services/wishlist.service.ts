import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseurlbackendService } from './baseurlbackend.service';
import { Observable } from 'rxjs';
import { MyLocalStorageService } from './my-local-storage.service';
import { HttpClientService } from './http-client.service';
import { products } from '../interfaces/products-lst';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
header:any="";
wishList_Products:products[]=[];
  constructor(   private _HttpClientService:HttpClientService,private _MyLocalStorageService:MyLocalStorageService ,private _HttpClient:HttpClient, private _BaseurlbackendService:BaseurlbackendService) { 

    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 

  }



GetUserWishlist():Observable<any>
{
// console.log(this.header)
this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 
return   this._HttpClient.get(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.wishListEndPoint}`,
  {headers:this.header});
}

  addProduct(id:string):Observable<any>
  {
    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 
    return   this._HttpClient.post(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.wishListEndPoint}`,
    {productId:id},{headers:this.header});

  }

  removeProduct(id:string):Observable<any>
  {
    this.header={token:JSON.parse(this._MyLocalStorageService.getData('Token'))} 
    return   this._HttpClient.delete(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.wishListEndPoint}/${id}`,
    {headers:this.header});

  }

  

}
