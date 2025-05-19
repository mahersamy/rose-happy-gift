import { Component } from '@angular/core';
import { SpecialSliderComponent } from "../special-slider/special-slider.component";
import { TallElementGridComponent } from "../tall-element-grid/tall-element-grid.component";
import { BottomGridCardComponent } from "../bottom-grid-card/bottom-grid-card.component";

@Component({
  selector: 'app-grid-carousel',
  imports: [SpecialSliderComponent, TallElementGridComponent, BottomGridCardComponent],
  templateUrl: './grid-carousel.component.html',
  styleUrl: './grid-carousel.component.scss'
})
export class GridCarouselComponent {

}
