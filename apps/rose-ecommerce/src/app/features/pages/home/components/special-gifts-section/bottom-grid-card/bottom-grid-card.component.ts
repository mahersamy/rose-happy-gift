import { Component, inject, input } from '@angular/core';
import { TranslationService } from 'apps/rose-ecommerce/src/app/core/services/translation.service';

@Component({
  selector: 'app-bottom-grid-card',
  imports: [],
  templateUrl: './bottom-grid-card.component.html',
  styleUrl: './bottom-grid-card.component.scss'
})
export class BottomGridCardComponent {
 private readonly _translationService=inject(TranslationService);
 isEn=this._translationService.defaultLang()=="en"?true:false;
 img=input.required<string>()
 head=input.required<string>()
 desc=input.required<string>()
 badgeText=input.required<string>()
}
