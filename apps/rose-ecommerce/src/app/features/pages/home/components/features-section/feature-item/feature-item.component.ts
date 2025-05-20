import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-item',
  imports: [],
  templateUrl: './feature-item.component.html',
  styleUrl: './feature-item.component.scss'
})
export class FeatureItemComponent {
  img=input.required();
  head=input.required();
  desc=input.required();
}
