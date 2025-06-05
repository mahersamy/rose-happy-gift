import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../../../../shared/components/ui/section-title/section-title.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery-section',
  imports: [CommonModule, SectionTitleComponent,TranslatePipe],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
}
