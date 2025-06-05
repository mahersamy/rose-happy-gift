import { Component } from '@angular/core';
import { TallElementGridComponent } from '../tall-element-grid/tall-element-grid.component';
import { BottomGridCardComponent } from '../bottom-grid-card/bottom-grid-card.component';
import { SpecialSliderComponent } from '../special-slider/special-slider.component';
import { GridBottomItem } from 'apps/rose-ecommerce/src/app/features/interfaces/grid-bottom-item';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-grid-carousel',
  imports: [
    SpecialSliderComponent,
    TallElementGridComponent,
    BottomGridCardComponent,
    TranslatePipe
  ],
  templateUrl: './grid-carousel.component.html',
  styleUrl: './grid-carousel.component.scss',
})
export class GridCarouselComponent {
  gridBottomItems:Array<GridBottomItem>= [
    {
      head: 'giftsBox.head',
      description: 'giftsBox.description',
      badgeText: 'giftsBox.badgeText',
      img: '/images/Confetti-lying-near-present.png',
    },
    {
      head: 'occasionGifts.head',
      description: 'occasionGifts.description',
      badgeText: 'occasionGifts.badgeText',
      img: '/images/Top-view-hand-holding-gift-box-on-work-space.png',
    },
    {
      head: 'comboSets.head',
      description: 'comboSets.description',
      badgeText: 'comboSets.badgeText',
      img: '/images/Christmas-shopping-composition-with-presents-and-cart.png',
    },
  ];
}
