import { Component } from '@angular/core';
import { GridCarouselComponent } from "./components/grid-carousel/grid-carousel.component";
import { FeaturesComponent } from "./components/features-section/features/features.component";

@Component({
  selector: 'app-home',
  imports: [GridCarouselComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
