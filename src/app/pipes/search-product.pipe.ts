import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../interfaces/products-lst';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(lst:products[],keyWord:string): products[] {
    return lst.filter(p=>p.title.toLowerCase().includes(keyWord.toLowerCase()));
  }

}
