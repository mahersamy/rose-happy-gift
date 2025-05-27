import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MainAdapterService } from '../adapter/main-adapter.service';
import { AllProductResponseAdapt, AllProductResponse } from '../modals/product';
import { products } from '../base/product';
import { Endpoints } from '../enums/endpoints';
import { environment } from '../environment/environment';
  
  
@Injectable({
  providedIn: 'root'
})
export class ProductService implements products {
     
      private readonly _HttpClient=inject(HttpClient)
      private readonly _adapter=inject(MainAdapterService)
 

      getProducts(paramsObj?: { [param: string]: string | number}):Observable<AllProductResponseAdapt>{
        let url
        if (paramsObj) {
              let params = new HttpParams();
            
            for (let key in paramsObj) {
              
              params = params.set(key, paramsObj[key]);
              
            }

            url=this._HttpClient.get<AllProductResponse>(`${environment.baseUrl+Endpoints.products}`, { params });
        }
        
        else {url=this._HttpClient.get<AllProductResponse>(`${environment.baseUrl+Endpoints.products}`)}
        
        return url.pipe(map((res: AllProductResponse) => this._adapter.AllProductAdapt(res)))

      
      }

    
    
   

}
