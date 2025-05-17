import { Route } from '@angular/router';

export const appRoutes: Route[] = [
     {
        path:'', loadComponent:()=>import('./features/pages/home/home.component').then(c=>c.HomeComponent)
      },
];
