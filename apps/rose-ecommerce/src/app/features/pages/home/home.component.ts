import { Component } from '@angular/core';
import { GridCarouselComponent } from "./components/special-gifts-section/grid-carousel/grid-carousel.component";
import { FeaturesComponent } from "./components/features-section/features/features.component";
import { AboutSectionComponent } from "../../../shared/components/presentation/about-section/about-section.component";

@Component({
  selector: 'app-home',
  imports: [GridCarouselComponent, FeaturesComponent, AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
