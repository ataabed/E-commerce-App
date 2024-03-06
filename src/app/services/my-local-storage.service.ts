import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocalStorageService {

  constructor() { }
  saveData(keyName: string, data: string): boolean {

    if (typeof (Storage) != 'undefined') {
      localStorage.setItem(keyName, JSON.stringify(data));
      return true;
    }
    else {
      return false;
    }

  }
getData(keyName:string):any
{
  if(typeof(Storage)!='undefined')
{
    return localStorage.getItem(keyName);
}
else
{
  return null;
}

}

removeData(keyName:string):void
{
  if(typeof(Storage)!='undefined')
  {
      localStorage.removeItem(keyName)
  } 

}

clearLocalStorage():void

{
  if(typeof(Storage)!='undefined')
  {
      localStorage.clear();
  } 

}
}
