import { Injectable } from '@angular/core';
import { Adapt } from '../modals/adapter';
import { Category, CategoryAdapt } from '../modals/category';
import { AllProductResponse, AllProductResponseAdapt, ProductData, ProductResponseAdapt } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class MainAdapterService implements Adapt {
  AllProductAdapt(data: AllProductResponse): AllProductResponseAdapt  {
     const allData=data.products
    return {
        metadata:data.metadata,
        message:data.message,
        products:allData.map(item => ({
        description:item.description ,
        id: item._id,
        imageCover: item.imgCover,
        images: item.images,
        price: item.price,
        quantity: item.quantity,
        title: item.title,
        catId:item.category,
        ratingsAverage:item.rateAvg


    }))
}} 
ProductAdapt(res: ProductData): ProductResponseAdapt  {
    const data = res.data

   return {
   
    description:data.description ,
    id: data._id,
    imageCover: data.imgCover,
    images: data.images,
    price: data.price,
    quantity: data.quantity,
    title: data.title,
    catId:data.category,
    ratingsAverage:data.rateAvg

    

 }}  
  CategoryAdapt(data: Category[]): CategoryAdapt[] {
    
    return data.map(cat=>({
         id:cat._id,
      name:cat.name,
      image:cat.image,
      productsCount:cat.productsCount
      })) 
     
     
  }

 
 
}
