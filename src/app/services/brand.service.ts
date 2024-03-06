import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseurlbackendService } from './baseurlbackend.service';
import { Observable } from 'rxjs';
import { Brand, Brands } from '../interfaces/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor( private _HttpClient:HttpClient ,private _BaseurlbackendService:BaseurlbackendService ) {}
   url = `${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.brandEndPoint}`

getAllBrands():Observable<any>
{
 let getAllBrands_url=`${this.url}`;

  return this._HttpClient.get(getAllBrands_url);
}
getSpecificBrand(keyword:string):Observable<any>
{
 let getSpecificBrand_url=`${this.url}/${keyword}`;
 
  return this._HttpClient.get(getSpecificBrand_url);
}

}
