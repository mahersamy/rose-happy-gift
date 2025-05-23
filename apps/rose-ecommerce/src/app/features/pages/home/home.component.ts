import { Component } from '@angular/core';
import { ProductItemComponent } from "../../../shared/components/product-item/product-item.component";
import { PopularItemsComponent } from "./components/popular-items/popular-items.component";
import { CategoriesHomeComponent } from "../../../shared/components/categories-home/categories-home.component";
import { TrustCompaniesComponent } from "./components/trust-companies/trust-companies.component";

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent, CategoriesHomeComponent, TrustCompaniesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
