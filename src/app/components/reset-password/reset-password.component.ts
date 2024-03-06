import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  VerifyCode:string=""
  url:string=""
  constructor(private _mybase: BaseurlbackendService,
    private myhttpclient: HttpClient,
   private _myRouter:Router) { }
  verify(){
///api/v1/auth/verifyResetCode
this.url=`${this._mybase.baseURL}/api/v1/auth/verifyResetCode`
this.myhttpclient.post(this.url,{'resetCode':`${this.VerifyCode}`}).subscribe({
next:(response:any)=>{
  if(response.statusMsg==="fail")
  {
   alert(response.message);
  }
  else{
    this._myRouter.navigate(["newPassword"])

  }
  console.log(Response)
},
error:(err)=>{
  if(err.statusMsg==="fail")
  {
   alert(err.message);
  }
  console.log(err)
}
  })
}
}
