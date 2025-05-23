import { Component, input } from '@angular/core';

@Component({
  selector: 'app-done-circular',
  imports: [],
  templateUrl: './done-circular.component.html',
  styleUrl: './done-circular.component.scss'
})
export class DoneCircularComponent {
  text=input.required<string>()

}
