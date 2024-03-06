import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from '../interfaces/login-user';
import { MyLocalStorageService } from './my-local-storage.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  userData: LoginUser = {
    userName: new BehaviorSubject(null),
    userToken: new BehaviorSubject(null),

    userRole: new BehaviorSubject(null),
    Token: new BehaviorSubject(null),
    cartId: new BehaviorSubject(null),
    cartProductsNumber:new BehaviorSubject(0),
    userAddres: new BehaviorSubject(null),
    wishListId:new BehaviorSubject(null)


  };

  constructor(private _HttpClient: HttpClient,
    private _MyLocalStorageService: MyLocalStorageService,
    private _Router: Router
  ) {
   /*  if (this._MyLocalStorageService.getData('userToken') !== ""|| this._MyLocalStorageService.getData('userToken')==null)
    { */
            this.updateUserData()

  /*  // }
    if (this._MyLocalStorageService.getData('cartId') !== ""||this._MyLocalStorageService.getData('cartId')!==null)
    { */
            this.updateUserCart()


         // }
/* 
          if (this._MyLocalStorageService.getData('wishListId') !== "")
    { */
            this.updateUserWishlist()

    //}

  }
  signUp(url: string, data: any): Observable<any> {
    return this._HttpClient.post(url, data)
  }

  signIn(url: string, data: any): Observable<any> {
    return this._HttpClient.post(url, data)
  }

  updateUserData(): void {
    const userSavedData = this._MyLocalStorageService.getData('userToken');
    if (userSavedData !== null ) {
//console.log("yyu",userSavedData)
       this.userData.userToken.next(JSON.parse( userSavedData));
      this.userData.userName.next(JSON.parse(userSavedData).name);
      this.userData.userRole.next(JSON.parse(userSavedData).role);
      this.userData.Token.next(JSON.parse(this._MyLocalStorageService.getData('Token')))

    }
    else {
      this.userData.userToken.next("");
      this.userData.userName.next("");
      this.userData.userRole.next("");
      this.userData.Token.next("")
    }

  }

  updateUserCart():void{
  this.userData.cartId.next(JSON.parse( this._MyLocalStorageService.getData('cartId')));

    this.userData.cartProductsNumber.next(JSON.parse( this._MyLocalStorageService.getData('cartProductsNumber'))); 


  }
  updateUserWishlist():void{
    this.userData.wishListId.next(JSON.parse( this._MyLocalStorageService.getData('wishListId')));


  }
  logout() {
    this._MyLocalStorageService.removeData('userToken');
    this._MyLocalStorageService.removeData('Token');
    this._MyLocalStorageService.removeData("cartId");
    this._MyLocalStorageService.removeData("cartProductsNumber")
    this._MyLocalStorageService.removeData("wishListId");
    this.userData.userToken.next(null);
    this.userData.userName.next(null);
    this.userData.userRole.next(null);
    this.userData.Token.next(null);
     this.userData.cartId.next(null);
     this.userData.wishListId.next(null);
    this.userData.cartProductsNumber.next(null); 
    this._MyLocalStorageService.clearLocalStorage();
/*     console.log(JSON.stringify( this.userData))
 */    this._Router.navigate(["login"])

  }

}
