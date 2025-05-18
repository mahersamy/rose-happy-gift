import { Component, input } from '@angular/core';
import { MainButtonComponent } from "../../../../../shared/components/ui/main-button/main-button.component";

@Component({
  selector: 'app-carousel-item',
  imports: [MainButtonComponent],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.scss'
})
export class CarouselItemComponent {
  img=input.required<string>()

}
