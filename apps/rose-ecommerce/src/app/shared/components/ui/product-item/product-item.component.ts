import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { CurrencyPipe } from '@angular/common';
import { ProductResponseAdapt } from 'apps/rose-ecommerce/src/app/core/modals/product';

@Component({
  selector: 'app-product-item',
  imports: [RatingModule,FormsModule,CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
@Input() product:ProductResponseAdapt={} as ProductResponseAdapt

 
}
