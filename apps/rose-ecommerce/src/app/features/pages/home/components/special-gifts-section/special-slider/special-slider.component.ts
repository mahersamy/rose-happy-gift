import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { SliderItem } from 'apps/rose-ecommerce/src/app/features/interfaces/slider-item';

@Component({
  selector: 'app-special-slider',
  imports: [CarouselModule, CarouselItemComponent],
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
    navText: ['<img src="/icons/prev.svg">', '<img src="/icons/next.svg">'],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      940: { items: 1 },
    },
    nav: true,
  };

  sliderItems: Array<SliderItem> = [
    {
      head: 'Choose Perfect <span class="color-pink-1">Gifts</span> From Us',
      description:
        'Quisquam, voluptates. Repellendus, voluptatum. Quidem, voluptatibus Quisquam, voluptates',
      headerTitle: 'BEST GIFT SHOP',
      img: '/images/special-slider-4.jpg',
    },
    {
      head: 'Choose Perfect <span class="color-pink-1">Gifts</span> From Us',
      description:
        'Quisquam, voluptates. Repellendus, voluptatum. Quidem, voluptatibus Quisquam, voluptates',
      headerTitle: 'BEST GIFT SHOP',

      img: '/images/special-slider-3.jpg',
    },
    {
      head: 'Choose Perfect <span class="color-pink-1">Gifts</span> From Us',
      description:
        'Quisquam, voluptates. Repellendus, voluptatum. Quidem, voluptatibus Quisquam, voluptates',
      headerTitle: 'BEST GIFT SHOP',

      img: '/images/special-slider-1.jpg',
    },
    {
      head: 'Choose Perfect <span class="color-pink-1">Gifts</span> From Us',
      description:
        'Quisquam, voluptates. Repellendus, voluptatum. Quidem, voluptatibus Quisquam, voluptates',
      headerTitle: 'BEST GIFT SHOP',

      img: '/images/special-slider-3.jpg',
    },
  ];
}
