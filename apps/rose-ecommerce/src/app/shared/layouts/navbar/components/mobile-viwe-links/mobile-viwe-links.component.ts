import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-mobile-viwe-links',
  imports: [],
  templateUrl: './mobile-viwe-links.component.html',
  styleUrl: './mobile-viwe-links.component.scss'
})
export class MobileViweLinksComponent {
  hidden=input.required<boolean>()
  closeBtn=output();

  handelCloseBtn(){
    this.closeBtn.emit()
  }

}
