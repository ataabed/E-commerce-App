import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClientService } from '../services/http-client.service';

export const authGuard: CanActivateFn = (route, state) => {
  let x=inject(HttpClientService);
  let _Router=inject(Router);
  if(x.userData.userToken.value!==null )
  {
   return true;
  }
  else
  {
    _Router.navigate(["/login"]);
    return false ;
  }
 
};
