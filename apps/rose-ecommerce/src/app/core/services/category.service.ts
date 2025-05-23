import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AllCategories, CategoryAdapt } from '../modals/category';
import { MainAdapterService } from '../adapter/main-adapter.service';
import { environment } from '../env/env.prod';
import { Endpoints } from '../enums/endpoints';
import { categories } from '../base/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements categories {
  private readonly _MainAdapterService=inject(MainAdapterService)
  private readonly _HttpClient=inject(HttpClient)
  
  getAllCategories():Observable<CategoryAdapt[]>{
   return this._HttpClient.get<AllCategories>(`${environment.apiUrl+Endpoints.categories}`).pipe(
        map((res:AllCategories) => this._MainAdapterService.CategoryAdapt(res.categories)),
        catchError((err) => throwError(() => err))

       ); }
 
 }
