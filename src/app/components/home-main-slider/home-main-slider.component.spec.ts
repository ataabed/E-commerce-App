import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainSliderComponent } from './home-main-slider.component';

describe('HomeMainSliderComponent', () => {
  let component: HomeMainSliderComponent;
  let fixture: ComponentFixture<HomeMainSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMainSliderComponent]
    });
    fixture = TestBed.createComponent(HomeMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
