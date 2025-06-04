import { Component } from '@angular/core';
import { FeatureItemComponent } from "../feature-item/feature-item.component";
import { FeatureItem } from 'apps/rose-ecommerce/src/app/features/interfaces/feature-item';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  imports: [FeatureItemComponent,TranslatePipe],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
 featureItems:Array<FeatureItem>=[
  {
    head: 'features.0.head',
    description: 'features.0.description',
    img: '/icons/delivery.svg',
  },
  {
    head: 'features.1.head',
    description: 'features.1.description',
    img: '/icons/refund.svg',
  },
  {
    head: 'features.2.head',
    description: 'features.2.description',
    img: '/icons/payment.svg',
  },
  {
    head: 'features.3.head',
    description: 'features.3.description',
    img: '/icons/support.svg',
  },
 ];
}
