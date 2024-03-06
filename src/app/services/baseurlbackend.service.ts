import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlbackendService {
public baseURL:string="https://ecommerce.routemisr.com";
public productsEndPoint="/api/v1/products";
public categoryEndPoint="/api/v1/categories";
public shoppingCartEndPoint="/api/v1/cart";
public userAddressEndPoint="/api/v1/addresses";
public checkOutEndPoint="/api/v1/orders/checkout-session";
//public checkOutEndPoint_returnUrl="https://ecommerce-theta-indol.vercel.app";
public checkOutEndPoint_returnUrl="http://localhost:4200";
public allordersEndPoint="/api/v1/orders/user";
public brandEndPoint="/api/v1/brands";
public subCategoryEndPoint="/api/v1/categories";
public wishListEndPoint="/api/v1/wishlist";
  constructor() { }
}
