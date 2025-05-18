import { Component } from '@angular/core';
import { SpecialSliderComponent } from "./components/special-slider/special-slider.component";
import { GridCarouselComponent } from "./components/grid-carousel/grid-carousel.component";

@Component({
  selector: 'app-home',
  imports: [SpecialSliderComponent, GridCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
