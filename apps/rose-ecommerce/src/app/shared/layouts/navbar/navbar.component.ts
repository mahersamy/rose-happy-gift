import { Component } from '@angular/core';
import { MobileViweLinksComponent } from "./components/mobile-viwe-links/mobile-viwe-links.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MobileViweLinksComponent,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin:boolean=false;
  showLinks:boolean=false;

  switchHidden(){
    this.showLinks=!this.showLinks;
  }
  
}
