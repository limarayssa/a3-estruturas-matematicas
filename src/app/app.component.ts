import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialPageComponent } from "./pages/initial-page/initial-page.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [InitialPageComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'batalha-naval';
}
