import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Orderlst } from 'src/app/interfaces/orderlst';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { MyLocalStorageService } from 'src/app/services/my-local-storage.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  constructor(
 

    private  _HttpClient:HttpClient,
    private _HttpClientService:HttpClientService,
    private _mylocalstorage:MyLocalStorageService,
    private _BaseurlbackendService :BaseurlbackendService
    ){
   
    }
    userId:string="";
    url:string="";
    userName:string="";
    orderlst:any;
    ngOnInit(): void {
      this.userId=JSON.parse(this._mylocalstorage.getData('userToken')).id
this.userName =JSON.parse(this._mylocalstorage.getData('userToken')).name
this.url=`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.allordersEndPoint}/${this.userId}}`
   

this._HttpClient.get(`${this._BaseurlbackendService.baseURL}${this._BaseurlbackendService.allordersEndPoint}/${this.userId}`).subscribe({

        next:(response)=>{
          this.orderlst=response
          console.log("hello",response)
        },
        error:(err)=>{
          console.log(err)
        }
      }) 
    }
}
