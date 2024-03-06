import { Injectable, OnInit } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { BaseurlbackendService } from './baseurlbackend.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

 url=`${this._baseurlbackend.baseURL}${this._baseurlbackend.productsEndPoint}`;
  constructor(private _baseurlbackend:BaseurlbackendService ,
    private _HttpClient:HttpClient) 
    { }

  getAllProducts(limit:number=50,page:number=1,brand:string="",category:string=""):Observable<any>
  {
   let newUrl=`${this.url}?limit=${limit}&page=${page}`
   if(category!=="")
   {
    newUrl+=`&category[in]=${category}`
   }
  return this._HttpClient.get(newUrl)
   
  }
  getAllProducts_limit(limit:number=40):Observable<any>
  {
   let url_limit=`${this.url}?limit=${limit}`
  return this._HttpClient.get(url_limit)
   
  }
  getAllProducts_Brand(brand:string=""):Observable<any>
  {
   let url_brand=`${this.url}?brand=${brand}`
  return this._HttpClient.get(url_brand)
   
  }

  getAllProducts_category(category:string=""):Observable<any>
  {
   let url_category=`${this.url}?category[in]=${category}`
  return this._HttpClient.get(url_category)
   
  }



}
