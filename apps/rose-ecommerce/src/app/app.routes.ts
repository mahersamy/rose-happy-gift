import { Route } from '@angular/router';

export const appRoutes: Route[] = [
      {path:"",redirectTo:"home",pathMatch:"full"},
     {path:"home",loadComponent:()=>import("./features/pages/home/home.component").then(c=>c.HomeComponent)},
     {path:'category/:id',loadComponent:()=>import("./features/pages/category-page/category-page.component").then(c=>c.CategoryPageComponent)},
 
 
];
