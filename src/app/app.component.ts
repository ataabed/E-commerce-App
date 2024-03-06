import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){
   
  }
  title = 'ata_Ecommerce';
 ngOnInit(): void {
  $('#sideBarIcons').slideUp();
 }
 Toggle_sideBar()
{
  $('#sideBarIcons').slideToggle();
}


}
