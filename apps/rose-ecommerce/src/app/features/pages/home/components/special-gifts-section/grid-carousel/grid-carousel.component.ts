import { Component } from '@angular/core';
import { TallElementGridComponent } from '../tall-element-grid/tall-element-grid.component';
import { BottomGridCardComponent } from '../bottom-grid-card/bottom-grid-card.component';
import { SpecialSliderComponent } from '../special-slider/special-slider.component';
import { GridBottomItem } from 'apps/rose-ecommerce/src/app/features/interfaces/grid-bottom-item';

@Component({
  selector: 'app-grid-carousel',
  imports: [
    SpecialSliderComponent,
    TallElementGridComponent,
    BottomGridCardComponent,
  ],
  templateUrl: './grid-carousel.component.html',
  styleUrl: './grid-carousel.component.scss',
})
export class GridCarouselComponent {
  gridBottomItems:Array<GridBottomItem>= [
    {
      head: 'Gifts Box',
      description: 'Awesome Gifts BoxCollectons',
      badgeText: 'Discover Now',
      img: '/images/Confetti-lying-near-present.png',
    },
    {
      head: 'Occasion Gifts',
      description: 'Best Occasion Gifts Collections',
      badgeText: 'Discover Now',
      img: '/images/Top-view-hand-holding-gift-box-on-work-space.png',
    },
    {
      head: 'Occasion Gifts',
      description: 'Best Occasion Gifts Collections',
      badgeText: 'Discover Now',
      img: '/images/Top-view-hand-holding-gift-box-on-work-space.png',
    },
  ];
}
