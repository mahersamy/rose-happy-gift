import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  AllProductResponseAdapt, ProductResponseAdapt } from '../../../core/modals/product';
import { ProductService } from '../../../core/services/product.service';
import { Subscription } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';
import { ProductItemComponent } from '../../../shared/components/ui/product-item/product-item.component';
import { CategoriesHomeComponent } from '../../../shared/components/presentation/categories-home/categories-home.component';


@Component({
  selector: 'app-category-page',
  imports: [ProductItemComponent, CategoriesHomeComponent,CarouselModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent implements OnInit,OnDestroy {


 private readonly _ActivatedRoute=inject(ActivatedRoute)
 private readonly _ProductService=inject(ProductService)
  


  productId:string=""
  products!:AllProductResponseAdapt
  supscription!:Subscription
  groupedProducts!:ProductResponseAdapt[][]


  ngOnInit()  {
    this.getId()
   }

getId():void{
   this._ActivatedRoute.paramMap.subscribe({
      next:(res)=> {
        this.productId=res.get("id")!
         
        this.getProducts(this.productId)
        
 
        
      },
    })

   }
  
   getProducts(id:string){
    this.supscription=  this._ProductService.getProducts({"category":id}).subscribe({
      next:(res)=>{
        this.products=res
          this.groupedProducts = this.chunkArray(this.products.products, 4);

         
         
        
      }
     })
   }

    chunkArray(allProducts: ProductResponseAdapt[], size: number):ProductResponseAdapt[][] {
  const result = [];
  for (let i = 0; i < allProducts.length; i += size) {
    result.push(allProducts.slice(i, i + size));
  }
  return result;

}

     ngOnDestroy(): void {
      this.supscription.unsubscribe()
   }
}
