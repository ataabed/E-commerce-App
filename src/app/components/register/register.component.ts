import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { BaseurlbackendService } from 'src/app/services/baseurlbackend.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { RegisterUser } from 'src/app/interfaces/register-user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[HttpClientService,BaseurlbackendService]
})
export class RegisterComponent implements OnInit {
  isloading:boolean=false;
  errorMsg:string="";
  private url:string="";
constructor( private registerAPI:HttpClientService,
  private baseurl:BaseurlbackendService,
  private toastr: ToastrService,
  private _Router:Router)
{
  this.url=`${baseurl.baseURL}/api/v1/auth/signup`;
  

}
registerForm:FormGroup=new FormGroup({

  name:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password : new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{6,20}$/)]),
  rePassword:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
},this.checkrePassword)

checkrePassword (form:any)
{
  if(form.get('password')?.value===form.get('rePassword').value)
  {
    return null
  }
  else
  {
    form.get('rePassword').setErrors({rePasswordMatch:'Repassword Not matched with Password'})
  console.log(form)
    return {rePasswordMatch:'Repassword Not matched with Password'}
  }
}
registerResponse_Success:object={};
registerResponse_Error:object={};
registerResponse_Complete:object={};
ngOnInit(): void {


}
submitForm()
{
  this.isloading=true;
 if(this.registerForm.valid)
 {
  this.registerAPI.signUp(this.url,this.registerForm.value).subscribe({
    next:(response)=>{

      this.registerResponse_Success=response;
      if(response.message==='success')
      {
        this.toastr.success("registered Success you will be forwarded to login ","Done",{progressBar:true,
          timeOut:1000,
          positionClass:'toast-bottom-right'});
   
this._Router.navigate(['login'])
this.isloading=false;      
}
    },
    error:(error)=>{this.registerResponse_Error=error.message;
      //console.log(error)
      this.isloading=false;      
this.errorMsg=error.error.message
    
    },
    complete:()=>{
   
    }
    
    
    
     } )
 }
}

}