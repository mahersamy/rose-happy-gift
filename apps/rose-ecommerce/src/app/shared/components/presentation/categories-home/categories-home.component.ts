import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from 'apps/rose-ecommerce/src/app/core/services/category.service';
import { CategoryAdapt } from 'apps/rose-ecommerce/src/app/core/modals/category';

@Component({
  selector: 'app-categories-home',
  imports: [CarouselModule],
  templateUrl: './categories-home.component.html',
  styleUrl: './categories-home.component.css',
})
export class CategoriesHomeComponent {
  private readonly _CategoryService = inject(CategoryService);
  private readonly _router = inject(Router);

  categories!: CategoryAdapt[];
  subscription!: Subscription;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '930px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '800px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '640px',
      numVisible: 2,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.subscription = this._CategoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
    });
  }

  goToCategory(categoryId: string) {
    this._router.navigate(['/category', categoryId]);
  }
}
