import { Component } from '@angular/core';
 import { ProductItemComponent } from "../../../shared/components/product-item/product-item.component";
import { PopularItemsComponent } from "./components/popular-items/popular-items.component";
import { CategoriesHomeComponent } from "../../../shared/components/categories-home/categories-home.component";
import { TrustCompaniesComponent } from "./components/trust-companies/trust-companies.component";
import { GridCarouselComponent } from "./components/special-gifts-section/grid-carousel/grid-carousel.component";
import { FeaturesComponent } from "./components/features-section/features/features.component";
import { AboutSectionComponent } from "../../../shared/components/presentation/about-section/about-section.component";

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent, CategoriesHomeComponent, TrustCompaniesComponentوGridCarouselComponent, FeaturesComponent, AboutSectionComponent],
 
   templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
