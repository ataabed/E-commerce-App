import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { MyLocalStorageService } from 'src/app/services/my-local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private _products:ProductService ,private _Router:Router,
    private _httpClient:HttpClient,
    private _BaseurlbackendService:BaseurlbackendService,
    private _ShoppingCartService :ShoppingCartService,
 

    private _MyLocalStorageService:MyLocalStorageService,
    private registerAPI :HttpClientService
    ){  }

    ngOnInit(): void {
/*       this._MyLocalStorageService.saveData('cartId',``);
      this._MyLocalStorageService.saveData('cartProductsNumber',``);
      
       this.registerAPI.updateUserCart();  */
    }
}
