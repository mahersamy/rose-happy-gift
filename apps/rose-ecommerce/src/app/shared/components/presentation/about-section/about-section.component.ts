import { Component } from '@angular/core';
import { MainButtonComponent } from '../../ui/main-button/main-button.component';
import { DoneCircularComponent } from './components/done-circular/done-circular.component';
import { AboutImageComponent } from './components/about-image/about-image.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-section',
  imports: [MainButtonComponent, DoneCircularComponent, AboutImageComponent,TranslatePipe],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  doneTextArr = [
    'about_us.point_1',
    'about_us.point_2',
    'about_us.point_3',
    'about_us.point_4',
  ];
}
