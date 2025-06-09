import { Component, inject, OnInit } from '@angular/core';
import { MobileViweLinksComponent } from './components/mobile-viwe-links/mobile-viwe-links.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [
    MobileViweLinksComponent,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly _translationService = inject(TranslationService);
  isDark = false;
  isLogin: boolean = false;
  showLinks: boolean = false;
  isEn: boolean = this._translationService.defaultLang() == 'en' ? true : false;

 ngOnInit(): void {
     const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('my-app-dark');
    }
  }

  switchHidden() {
    this.showLinks = !this.showLinks;
  }

  switchLang() {
    if (this.isEn) {
      this._translationService.changeLang('ar');
    } else {
      this._translationService.changeLang('en');
    }
    this.isEn = !this.isEn;
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.classList.add('my-app-dark');
            localStorage.setItem('theme', 'dark');

    } else {
      document.documentElement.classList.remove('my-app-dark');
            localStorage.setItem('theme', 'light');

    }
  }
}
