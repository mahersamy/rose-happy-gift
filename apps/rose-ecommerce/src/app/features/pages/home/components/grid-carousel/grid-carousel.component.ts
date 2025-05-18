import { Component } from '@angular/core';
import { SpecialSliderComponent } from "../special-slider/special-slider.component";
import { MainButtonComponent } from "../../../../../shared/components/ui/main-button/main-button.component";

@Component({
  selector: 'app-grid-carousel',
  imports: [SpecialSliderComponent, MainButtonComponent],
  templateUrl: './grid-carousel.component.html',
  styleUrl: './grid-carousel.component.scss'
})
export class GridCarouselComponent {

}
