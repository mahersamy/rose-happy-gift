import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from './core/services/translation.service';
   
@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _translationService = inject(TranslationService);
  title = 'rose-ecommerce';
}
