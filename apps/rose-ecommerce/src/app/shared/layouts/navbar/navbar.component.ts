import { Component, inject } from '@angular/core';
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
export class NavbarComponent {
  private readonly _translationService = inject(TranslationService);
  isLogin: boolean = false;
  showLinks: boolean = false;
  isEn: boolean = this._translationService.defaultLang() == 'en' ? true : false;

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
}
