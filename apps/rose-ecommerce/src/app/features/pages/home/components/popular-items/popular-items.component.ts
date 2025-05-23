import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from "../../../../../shared/components/product-item/product-item.component";
 import { SectionTitleComponent } from "../../../../../shared/components/section-title/section-title.component";
import { AllProductResponseAdapt, ProductResponse, ProductResponseAdapt } from 'apps/rose-ecommerce/src/app/core/modals/product';
import { ProductService } from 'apps/rose-ecommerce/src/app/core/services/product.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from "../../../../../shared/components/categories_popular/categories.component";
 
@Component({
  selector: 'app-popular-items',
  imports: [ProductItemComponent, SectionTitleComponent, CommonModule, CategoriesComponent,CarouselModule],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.css'
})
export class PopularItemsComponent implements OnInit{
 
  private readonly _ProductService=inject(ProductService);
 
   products:AllProductResponseAdapt={} as AllProductResponseAdapt
   groupedProducts!:ProductResponseAdapt[][]

ngOnInit() {
  this.getProducts()
 
 
  
 }
getProducts(){
  this._ProductService.getProducts({limit:12,page:1}).subscribe({
    next:(res)=>{
      this.products=res
  this.groupedProducts = this.chunkArray(this.products.products, 4);

    
    },
    error(err) {
      console.log(err);
      
    },
     
  } )
}
 
 handleProductsByCategory(catId:string) {
    this._ProductService.getProducts({"category":catId,"limit":12}).subscribe({
      next:(res)=>{
      this.products=res
   this.groupedProducts = this.chunkArray(this.products.products, 4);

    },
    error(err) {
      console.log(err);
      
    },
   
    })
  }

  chunkArray(allProducts: ProductResponseAdapt[], size: number):ProductResponseAdapt[][] {
  const result = [];
  for (let i = 0; i < allProducts.length; i += size) {
    result.push(allProducts.slice(i, i + size));
  }
  return result;

}
   
}
