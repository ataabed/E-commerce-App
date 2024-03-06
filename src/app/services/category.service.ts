import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseurlbackendService } from './baseurlbackend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url=`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.categoryEndPoint}`;

  constructor(private _httpClient:HttpClient , private _BaseurlbackendService:BaseurlbackendService) { }

  getAllCategories():Observable<any>
  {

  return  this._httpClient.get(this.url);
  }
  getCategory(id:string):Observable<any>
  {
    return this._httpClient.get(`${this.url}/${id}`);
  }

  getCategory_subCategories(categoryId:string):Observable<any>
  {
    return this._httpClient.get(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.subCategoryEndPoint}/${categoryId}/subcategories`)

  }
}
