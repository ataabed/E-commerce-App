import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseurlbackendService } from './baseurlbackend.service';
import { HttpClientService } from './http-client.service';
import { UserAddress } from '../interfaces/user-address';
import { MyLocalStorageService } from './my-local-storage.service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
    url:String=`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.userAddressEndPoint}`

  constructor(private _HttpClient:HttpClient ,
    private _BaseurlbackendService:BaseurlbackendService,
    private _HttpClientService:HttpClientService,
    private MyLocalStorage:MyLocalStorageService
   )
     {
   }

   header={token:JSON.parse( `${this.MyLocalStorage.getData('Token')}`)} 
Add_address(_address:UserAddress):Observable<any>
{
  return   this._HttpClient.post(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.userAddressEndPoint}`
  ,
    {address:_address},{headers:this.header});
}

}
