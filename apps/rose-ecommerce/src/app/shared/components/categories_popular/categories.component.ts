import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import {  CategoryAdapt } from '../../../core/modals/category';
import { CategoryService } from '../../../core/services/category.service';
import { Subscription } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';
 

@Component({
  selector: 'app-categories',
  imports: [CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit,OnDestroy {
  

 
   categories!:CategoryAdapt[]
  subscription!: Subscription;
  @Output() catId = new EventEmitter<string>();


  private readonly _CategoryService=inject(CategoryService)

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

   sendCatId(id:string) {
     
    this.catId.emit(id);
  }


   
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
