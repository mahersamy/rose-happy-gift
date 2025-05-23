import { Component, input } from '@angular/core';
import { FeatureItemComponent } from "../feature-item/feature-item.component";
import { FeatureItem } from 'apps/rose-ecommerce/src/app/features/interfaces/feature-item';

@Component({
  selector: 'app-features',
  imports: [FeatureItemComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
 featureItems:Array<FeatureItem>=[
  {
    head:"Free Delivery",
    description:"Orders Over $120",
    img:"/icons/delivery.svg",
  },
  {
    head:"Get Refund",
    description:"Within 30 Days Returns",
    img:"/icons/refund.svg",
  },
  {
    head:"Safe Payment",
    description:"100% Secure Payment",
    img:"/icons/payment.svg",
  },
  {
    head:"24/7 Support",
    description:"Feel Free To Call Us",
    img:"/icons/support.svg",
  },
 ];
}
