import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../interfaces/products-lst';

@Pipe({
  name: 'searchBycategory'
})
export class SearchBycategoryPipe implements PipeTransform {

  transform(lst:products[], categoryname:string): products[] {
    return lst.filter(p=>p.category.name.toLowerCase().includes(categoryname.toLowerCase())) ;
  }

}
