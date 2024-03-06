import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  myNewPassword:string="";
  userEmail:string="";
  url:string="";
  constructor(private _myRouter:Router, private _mybase: BaseurlbackendService,
    private myhttpclient: HttpClient) { }

    newPassword()
    {
      this.url=`${this._mybase.baseURL}/api/v1/auth/resetPassword`
      this.myhttpclient.put(this.url,{'email':`${this.userEmail}`,'newPassword':`${this.myNewPassword}`}).subscribe({
      next:(Response:any)=>{
      
          console.log(Response)

            this._myRouter.navigate(["login"])
       
   
      
      },
      error:(err)=>{
        console.log(err)
      }
      
      })  

    }
}
