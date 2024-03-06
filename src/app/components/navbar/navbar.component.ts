import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';
import { MyLocalStorageService } from 'src/app/services/my-local-storage.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , AfterViewInit {
  islogged:boolean=false;
  userName:string="";
  cartProductCount=new BehaviorSubject(JSON.parse( this._MyLocalStorageService.getData("cartProductsNumber")));
 @ViewChild('mainNavBar') mainNavBar!:ElementRef;
@ViewChildren('mainNavBarLinks') mainNavBarLinks!:QueryList<any>;
 
  constructor(public registerAPI:HttpClientService,private _MyLocalStorageService:MyLocalStorageService){


}

ngAfterViewInit(): void {
/* console.log(this.mainNavBarLinks) */
}
ngOnInit(): void {
this.registerAPI.userData.userToken.subscribe({

  next:()=>{

    if(this.registerAPI.userData.userToken.getValue()!=="" && this.registerAPI.userData.userToken.getValue()!==null)
    {
      
this.islogged=true;
    }
    else
    {
      this.islogged=false;
    }
  }
})

this.registerAPI.userData.userName.subscribe({

  next:()=>{

    if(this.registerAPI.userData.userToken.getValue()!=="" && this.registerAPI.userData.userToken.getValue()!==null)
    {
this.userName=this.registerAPI.userData.userName.getValue();
    }
    this.userName="";
  }
});
this.registerAPI.userData.cartProductsNumber.subscribe({
  next:()=>{
    
    this.cartProductCount.next(JSON.parse( this._MyLocalStorageService.getData("cartProductsNumber")))

  /*   if(this.registerAPI.userData.cartProductsNumber.getValue()!=="" && this.registerAPI.userData.cartProductsNumber.getValue()!==null)
    {
      console.log("yyyyy",this.registerAPI.userData.cartProductsNumber.getValue())
      this.cartProductCount.next(this.registerAPI.userData.cartProductsNumber.subscribe());
    }
    else
    {
      this.cartProductCount.subscribe(this.registerAPI.userData.cartProductsNumber.getValue())
    } */
  }
}) 

}
links:string[]=['home','cart','wishlist','products','categories','brands']
logout()

{
  this.islogged=false;
  this.registerAPI.logout();
}



 @HostListener('window:scroll')
scrollWindow()
{
  if(window.scrollY<100)
  {
      this.mainNavBar.nativeElement.classList.add("py-3")
      this.mainNavBar.nativeElement.classList.add("px-5")

  }
  else
  {
    this.mainNavBar.nativeElement.classList.remove("py-3")
    this.mainNavBar.nativeElement.classList.remove("px-5")
  }

} 
}
