import { Category, CategoryAdapt } from "./category";
import { AllProductResponse, AllProductResponseAdapt, ProductData, ProductResponseAdapt } from "./product";

export interface Adapt {
    CategoryAdapt(data:Category[]):CategoryAdapt[]
    AllProductAdapt(data:AllProductResponse):AllProductResponseAdapt;
    ProductAdapt(data:ProductData):ProductResponseAdapt;



}
