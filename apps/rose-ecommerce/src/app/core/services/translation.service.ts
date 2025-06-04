import { inject, Injectable, PLATFORM_ID, signal, Signal, WritableSignal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly translateService = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  defaultLang: WritableSignal<string> = signal<string>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lng');
      if (savedLang) {
        this.defaultLang.set(savedLang);
      }
      this.translateService.setDefaultLang(this.defaultLang());
      this.translateService.use(this.defaultLang());
    }
    this.changeDir(this.defaultLang());
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);
    }
    this.changeDir(lang);
  }

  changeDir(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (lang == 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
      }
    }
  }
}
