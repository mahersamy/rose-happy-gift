import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpLoaderFactory } from './shared/helpers/translate-helper';
import { TranslationService } from './core/services/translation.service';

 
export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(
      () => {
        const trans = inject(TranslationService);
        return trans.init();
      }
    ),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                  darkModeSelector: '.my-app-dark'
              }
            }
        }),
    importProvidersFrom(
      TranslateModule.forRoot({
         loader: {
           provide: TranslateLoader,
           useFactory: HttpLoaderFactory,
           deps: [HttpClient]
         }
       })
    )
  ],
};
