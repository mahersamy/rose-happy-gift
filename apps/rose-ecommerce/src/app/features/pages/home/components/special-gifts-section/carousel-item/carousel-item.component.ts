import { Component, input } from '@angular/core';
import { MainButtonComponent } from 'apps/rose-ecommerce/src/app/shared/components/ui/main-button/main-button.component';

@Component({
  selector: 'app-carousel-item',
  imports: [MainButtonComponent],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.scss'
})
export class CarouselItemComponent {
  head = input.required<string>();
  descrption = input.required<string>();
  headerTitle = input.required<string>();
  img = input.required<string>();
}
