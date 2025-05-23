import { Observable } from 'rxjs';
import { CategoryAdapt } from '../modals/category';
 
export abstract class categories {
  abstract getAllCategories(): Observable<CategoryAdapt[]>;
 
 }
