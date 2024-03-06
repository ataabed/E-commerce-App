import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
    constructor(private _myRouter:Router, private _mybase: BaseurlbackendService,
    private myhttpclient: HttpClient) { }
      userEmail: string = "";
url:string=""
  sendEmail()
  {
  this.url=`${this._mybase.baseURL}/api/v1/auth/forgotPasswords`
this.myhttpclient.post(this.url,{'email':`${this.userEmail}`}).subscribe({
next:(Response)=>{
  this._myRouter.navigate(["VerifCode"])

},
error:(err)=>{
  console.log(err)
}

})  

}

}


