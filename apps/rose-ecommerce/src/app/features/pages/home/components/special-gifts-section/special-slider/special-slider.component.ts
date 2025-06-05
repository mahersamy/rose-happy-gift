import { Component} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { SliderItem } from 'apps/rose-ecommerce/src/app/features/interfaces/slider-item';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-special-slider',
  imports: [CarouselModule, CarouselItemComponent,TranslatePipe],
  templateUrl: './special-slider.component.html',
  styleUrl: './special-slider.component.scss',
})
export class SpecialSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="/icons/next.svg">','<img src="/icons/prev.svg">'],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      940: { items: 1 },
    },
    nav: true,
    rtl: true,
  };

  sliderItems: Array<SliderItem> = [
    {
      head: 'slider.0.head',
      description: 'slider.0.description',
      headerTitle: 'slider.0.headerTitle',
      img: '/images/special-slider-4.jpg',
    },
    {
      head: 'slider.1.head',
      description: 'slider.1.description',
      headerTitle: 'slider.1.headerTitle',
      img: '/images/special-slider-3.jpg',
    },
    {
      head: 'slider.2.head',
      description: 'slider.2.description',
      headerTitle: 'slider.2.headerTitle',
      img: '/images/special-slider-1.jpg',
    },
    {
      head: 'slider.3.head',
      description: 'slider.3.description',
      headerTitle: 'slider.3.headerTitle',
      img: '/images/special-slider-3.jpg',
    },
  ];
}
