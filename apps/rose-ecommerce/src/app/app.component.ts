import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
   
@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rose-ecommerce';
}
