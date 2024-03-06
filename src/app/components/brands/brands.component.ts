import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Brand, Brands } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';
declare let $:any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit ,AfterViewInit {

constructor(private _BrandService:BrandService ){}
showLoader:boolean=true;
//@ViewChild('myModal')myModalRef!:ElementRef;
//@ViewChildren('mychildern')mychildern!:QueryList<any>;
//students:any[]=[{'name':'ata'},{'name':'fatma'},{'name':'maream'},{'name':'malak'}]
@ViewChild('myModal') myModal!:ElementRef; 

openModal(){
  $(this.myModal.nativeElement).modal('show')
  }

  closeModal(  ){
    $(this.myModal.nativeElement).modal('hide')
  }
ngAfterViewInit(): void {
  console.log(this.myModal)
  //console.log(this.mychildern);
//this.mychildern.changes.subscribe(()=>{console.log(this.mychildern.length)})
}

/* testJquery()
{
  $('#myEE').html("fbbbbbbbbbbbbbbbbbbbbbbbbbb")
}
addSpan()
{
  this.students.push({'name':'xxx'})
} */

ngOnInit(): void {
  
  this._BrandService.getAllBrands().subscribe({

    next:(response)=>{
      this.showLoader=false
      this.brandslst=response.data;
      console.log(response);
    },
    error:(err)=>{
      console.log(err);
    }

  })
}

brandslst:Brand[]=[];
specificBrand:Brand={_id:"",name:"",image:'',slug:'',createdAt:new Date,updatedAt:new Date}
getSpecificBrand(id:string)
{
  this.showLoader=true;
  this._BrandService.getSpecificBrand(id).subscribe({
     next:(response)=>{
    
  this.specificBrand._id=response.data._id;
  this.specificBrand.name=response.data.name;
  this.specificBrand.image=response.data.image;
  this.specificBrand.slug=response.data.slug;
  this.specificBrand.createdAt=response.data.createdAt;
  this.specificBrand.updatedAt=response.data.specificBrand;
  this.showLoader=false
 $(this.myModal.nativeElement).modal('show')
      console.log( this.specificBrand._id);
    },
    error:(err)=>{
      console.log(err)
    } 
  })
}


}
