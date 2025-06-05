import { Component } from '@angular/core';
import { MainButtonComponent } from "../../../../../../shared/components/ui/main-button/main-button.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-tall-element-grid',
  imports: [MainButtonComponent,TranslatePipe],
  templateUrl: './tall-element-grid.component.html',
  styleUrl: './tall-element-grid.component.scss'
})
export class TallElementGridComponent {

}
