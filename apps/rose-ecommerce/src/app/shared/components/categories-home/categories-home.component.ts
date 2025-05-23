import { Component, inject, OnDestroy } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CategoryAdapt } from '../../../core/modals/category';
import { CategoryService } from '../../../core/services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-categories-home',
  imports: [CarouselModule],
  templateUrl: './categories-home.component.html',
  styleUrl: './categories-home.component.css'
})
export class CategoriesHomeComponent implements OnDestroy
 {
  
   categories!:CategoryAdapt[]
  subscription!: Subscription;


  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '930px',
      numVisible: 4,
      numScroll: 1
    },
     {
      breakpoint: '800px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '640px',
      numVisible: 2,
      numScroll: 1
    }
  ];

private readonly _CategoryService=inject(CategoryService)
private readonly _router=inject(Router)

  ngOnInit() {
    this.getCategories()
   }

   getCategories(){
   this.subscription= this._CategoryService.getAllCategories().subscribe({
      next:(res)=>{
        this.categories=res
         
      },
    })
   }
   
   
goToCategory(categoryId: string) {
  this._router.navigate(['/category', categoryId]);
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}

}

