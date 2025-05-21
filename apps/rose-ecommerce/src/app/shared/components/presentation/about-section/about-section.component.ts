import { Component } from '@angular/core';
import { MainButtonComponent } from '../../ui/main-button/main-button.component';
import { DoneCircularComponent } from './components/done-circular/done-circular.component';
import { AboutImageComponent } from './components/about-image/about-image.component';

@Component({
  selector: 'app-about-section',
  imports: [MainButtonComponent, DoneCircularComponent, AboutImageComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  doneTextArr = [
    'Streamlined Shipping Experience',
    'Competitive Price & Easy To Shop',
    'Affordable Modern Design',
    'We Made Awesome Products',
  ];
}
