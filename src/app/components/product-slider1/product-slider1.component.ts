import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-slider1',
  templateUrl: './product-slider1.component.html',
  styleUrls: ['./product-slider1.component.css'],

})
export class ProductSlider1Component implements OnInit {
  categoryList:Category[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
   
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    
    },
    nav: true
  }
constructor(private _categoryService:CategoryService,private _ProductService:ProductService){}

ngOnInit(): void {
  
  this._categoryService.getAllCategories().subscribe({

    next:(Response)=>{
this.categoryList=Response.data;
    },
    error:(Error)=>{
      
    }
  })
}


getCategoryProduct(id:string)
{
this._ProductService.getAllProducts_category(id).subscribe({
  next:(response)=>{
    console.log(response)
  }
})
}
}
