import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit ,AfterViewInit {

  @ViewChild('myModal') myModal!:ElementRef; 
ngAfterViewInit(): void {

}

ngOnInit(): void {
  
}


  openModal(){
  $(this.myModal.nativeElement).modal('show')
  }

  closeModal(  ){
    $(this.myModal.nativeElement).modal('hide')
  }

}
