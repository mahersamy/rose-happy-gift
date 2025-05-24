import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../../../../shared/components/section-title/section-title.component";

@Component({
  selector: 'app-gallery-section',
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
}
