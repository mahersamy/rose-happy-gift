import { Observable } from "rxjs";
import { AllProductResponseAdapt } from "../modals/product";

export abstract class products {
    abstract getProducts():Observable<AllProductResponseAdapt>
}