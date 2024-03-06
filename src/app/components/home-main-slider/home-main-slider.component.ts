import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-main-slider',
  templateUrl: './home-main-slider.component.html',
  styleUrls: ['./home-main-slider.component.css']
})
export class HomeMainSliderComponent {
  sliderImages:string[]=["../../../assets/images/main-slider-1.jpeg" ,
  "../../../assets/images/main-slider-2.jpeg" ,
  "../../../assets/images/main-slider-3.jpeg" ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
     
    },
    nav: false
  }
}
