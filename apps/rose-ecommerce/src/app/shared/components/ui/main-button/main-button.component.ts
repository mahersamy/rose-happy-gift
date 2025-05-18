import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {
press=output()
text=input.required<string>();



pressHandler(){
  this.press.emit()
}
}
