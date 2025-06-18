import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  imports: [],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css',
})
export class FinalComponent {
  constructor(private router: Router) {}

  telaInicial() {
    this.router.navigate(['pages/home']);
  }

  playAgain() {
    this.router.navigate(['pages/choose-ships']);
  }
}
