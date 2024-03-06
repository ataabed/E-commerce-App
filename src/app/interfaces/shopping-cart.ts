import { products } from "./products-lst";

export interface ShoppingCart {
    status:         string;
    message:        string;
    numOfCartItems: number;
    data:           Data;
}

export interface Data {
    _id:            string;
    cartOwner:      string;
    products:       ShoppingCart_Product[];
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
    totalCartPrice: number;
}

export interface ShoppingCart_Product {
    count:   number;
    _id:     string;
    product: products;
    price:   number;
}
