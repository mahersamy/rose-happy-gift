import { Component } from '@angular/core';
import { MainButtonComponent } from "../../components/ui/main-button/main-button.component";
import { MobileViweLinksComponent } from "./components/mobile-viwe-links/mobile-viwe-links.component";

@Component({
  selector: 'app-navbar',
  imports: [MainButtonComponent, MobileViweLinksComponent],
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
