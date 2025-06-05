import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-mobile-viwe-links',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
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
