
export interface Orderlst {
    taxPrice:          number;
    shippingPrice:     number;
    totalOrderPrice:   number;
    paymentMethodType: PaymentMethodType;
    isPaid:            boolean;
    isDelivered:       boolean;
    _id:               string;
    user:              User;
    cartItems:         CartItem[];
    paidAt:            Date;
    createdAt:         Date;
    updatedAt:         Date;
    id:                number;
    __v:               number;
    shippingAddress?:  ShippingAddress;
}

export interface CartItem {
    count:   number;
    _id:     string;
    product: Product;
    price:   number;
}

export interface Product {
    subcategory:     Brand[];
    ratingsQuantity: number;
    _id:             string;
    title:           string;
    imageCover:      string;
    category:        Brand;
    brand:           Brand;
    ratingsAverage:  number;
    id:              string;
}

export interface Brand {
    _id:       ID;
    name:      BrandName;
    slug:      Slug;
    image?:    string;
    category?: ID;
}

export enum ID {
    The6407F1Bcb575D3B90Bf95797 = "6407f1bcb575d3b90bf95797",
    The6407F243B575D3B90Bf957AC = "6407f243b575d3b90bf957ac",
    The64089Bbe24B25627A253158B = "64089bbe24b25627a253158b",
    The64089C3924B25627A2531593 = "64089c3924b25627a2531593",
    The64089D5C24B25627A253159F = "64089d5c24b25627a253159f",
    The64089D9E24B25627A25315A5 = "64089d9e24b25627a25315a5",
    The6439D58A0049Ad0B52B9003F = "6439d58a0049ad0b52b9003f",
    The6439D5B90049Ad0B52B90048 = "6439d5b90049ad0b52b90048",
}

export enum BrandName {
    Adidas = "Adidas",
    DeFacto = "DeFacto",
    LCWaikiki = "LC Waikiki",
    MenSClothing = "Men's Clothing",
    MenSFashion = "Men's Fashion",
    Puma = "Puma",
    WomenSClothing = "Women's Clothing",
    WomenSFashion = "Women's Fashion",
}

export enum Slug {
    Adidas = "adidas",
    Defacto = "defacto",
    LcWaikiki = "lc-waikiki",
    MenSClothing = "men's-clothing",
    MenSFashion = "men's-fashion",
    Puma = "puma",
    WomenSClothing = "women's-clothing",
    WomenSFashion = "women's-fashion",
}

export enum PaymentMethodType {
    Card = "card",
}

export interface ShippingAddress {
    details: string;
    phone:   string;
    city:    string;
}

export interface User {
    _id:   UserID;
    name:  UserName;
    email: Email;
    phone: string;
}

export enum UserID {
    The65Cb06748462Ab02C71E4F61 = "65cb06748462ab02c71e4f61",
}

export enum Email {
    Ataabed29GmailCOM = "ataabed29@gmail.com",
}

export enum UserName {
    ATAAbed = "Ata abed",
}
