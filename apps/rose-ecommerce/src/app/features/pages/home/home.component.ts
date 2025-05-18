import { Component } from '@angular/core';
import { SpecialSliderComponent } from "./components/special-slider/special-slider.component";

@Component({
  selector: 'app-home',
  imports: [SpecialSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
