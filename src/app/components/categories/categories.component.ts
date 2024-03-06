import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, SubCategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList:Category[]=[];
  subList:SubCategory[]=[];
  err:any="";
  showLoader=true;
constructor(private _categoryService:CategoryService ,private _Router:Router){}

ngOnInit(): void {
  this._categoryService.getAllCategories().subscribe({

next:(response)=>{
  this.showLoader=false;
this.categoryList=response.data;
},
error:(error)=>{
  this.showLoader=false;
this.err=error;
}

  })
}

getCategory_sub(id:string)
{
  console.log(id)
 this._categoryService.getCategory_subCategories(id).subscribe({
next:(response)=>{
  this.subList=response.data;
console.log(response)
},
error:(err)=>{
console.log(err)
}
  }); 
}
}
