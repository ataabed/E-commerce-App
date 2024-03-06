import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseurlbackendService } from './baseurlbackend.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private _HttpClient:HttpClient ,private _BaseurlbackendService:BaseurlbackendService) { }



}
