import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AllProductResponseAdapt,
  ProductResponseAdapt,
} from '../../../core/modals/product';
import { ProductService } from '../../../core/services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';
import { ProductItemComponent } from '../../../shared/components/ui/product-item/product-item.component';
import { CategoriesHomeComponent } from '../../../shared/components/presentation/categories-home/categories-home.component';

@Component({
  selector: 'app-category-page',
  imports: [ProductItemComponent, CategoriesHomeComponent, CarouselModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.sass',
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductService = inject(ProductService);
  private readonly destroy$ = new Subject<void>();

  productId: string = '';
  products!: AllProductResponseAdapt;
  groupedProducts!: ProductResponseAdapt[][];

  ngOnInit() {
    this.getId();
  }

  getId(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.productId = res.get('id')!;

        this.getProducts(this.productId);
      },
    });
  }

  getProducts(id: string) {
    this._ProductService
      .getProducts({ category: id })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.products = res;
          this.groupedProducts = this.chunkArray(this.products.products, 4);
        },
      });
  }

  chunkArray(
    allProducts: ProductResponseAdapt[],
    size: number
  ): ProductResponseAdapt[][] {
    const result = [];
    for (let i = 0; i < allProducts.length; i += size) {
      result.push(allProducts.slice(i, i + size));
    }
    return result;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
