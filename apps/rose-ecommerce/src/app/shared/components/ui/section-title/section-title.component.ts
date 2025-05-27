import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.sass'
})
export class SectionTitleComponent {
  title=input.required<string>()
}
