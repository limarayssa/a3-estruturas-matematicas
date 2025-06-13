import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialPageComponent } from "./pages/initial-page/initial-page.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { ChooseShipsComponent } from "./pages/choose-ships/choose-ships/choose-ships.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'batalha-naval';
}
