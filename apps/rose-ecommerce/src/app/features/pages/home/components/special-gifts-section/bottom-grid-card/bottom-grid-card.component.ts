import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bottom-grid-card',
  imports: [],
  templateUrl: './bottom-grid-card.component.html',
  styleUrl: './bottom-grid-card.component.scss'
})
export class BottomGridCardComponent {
 img=input.required<string>()
 head=input.required<string>()
 desc=input.required<string>()
 badgeText=input.required<string>()
}
