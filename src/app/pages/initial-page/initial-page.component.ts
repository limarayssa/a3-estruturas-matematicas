import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  imports: [CommonModule],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css',
})
export class InitialPageComponent {
  constructor(private router: Router) {}
  mostrarInstrucoes = false;
  mostrarSobreNos = false;

  iniciar() {
    this.router.navigate(['pages/choose-ships']);
  }

  toggleInstrucoes() {
    this.mostrarInstrucoes = !this.mostrarInstrucoes;
    // Esconde o outro se estiver aberto
    if (this.mostrarInstrucoes) this.mostrarSobreNos = false;
  }

  toggleSobreNos() {
    this.mostrarSobreNos = !this.mostrarSobreNos;
    // Esconde o outro se estiver aberto
    if (this.mostrarSobreNos) this.mostrarInstrucoes = false;
  }
}
