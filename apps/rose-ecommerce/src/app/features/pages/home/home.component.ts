import { Component } from '@angular/core';
import { PopularItemsComponent } from "./components/popular-items/popular-items.component";
import { CategoriesHomeComponent } from "../../../shared/components/categories-home/categories-home.component";

import { FeaturesComponent } from "./components/features-section/features/features.component";
import { AboutSectionComponent } from "../../../shared/components/presentation/about-section/about-section.component";
import { TrustCompaniesComponent } from './components/trust-companies/trust-companies.component';
import { GridCarouselComponent } from './components/special-gifts-section/grid-carousel/grid-carousel.component';
import { NavbarComponent } from "../../../shared/layouts/navbar/navbar.component";
import { GallerySectionComponent } from "./components/gallery-section/gallery-section.component";

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent, CategoriesHomeComponent, TrustCompaniesComponent, GridCarouselComponent, FeaturesComponent, AboutSectionComponent, NavbarComponent, GallerySectionComponent],
 
   templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
