import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-choose-ships',
  imports: [CommonModule],
  templateUrl: './choose-ships.component.html',
  styleUrl: './choose-ships.component.css',
})
export class ChooseShipsComponent {

  constructor(private router: Router) {
}

  tabuleiro: string[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill(''));
  colunas: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  navio: string[] = [];
  maxNavios = 10;

  selecionarNavio(x: number, y: number) {
    const posicao = `${this.colunas[y]}${x + 1}`;
    const isSelected = this.navio.includes(posicao);

    if (isSelected) {
      this.navio = this.navio.filter((p) => p !== posicao);
      this.tabuleiro[x][y] = '';
    } else {
      if (this.navio.length < this.maxNavios) {
        // Selecionar
        this.navio.push(posicao);
        this.tabuleiro[x][y] = 'navio';
        console.log(this.tabuleiro)
      } else {
        alert('Você já posicionou todos os navios.');
      }
    }
  }

  clear() {
    // debugger
    // alert('apertei clear aki');
    console.log(this.navio.length <= 0)
    console.log('apertei clear aki')
      this.tabuleiro = Array(10).fill(null).map(() => Array(10).fill(''));
      this.navio = [];
  }

  comecar(playerTabuleiro: string[][]) {
    playerTabuleiro = this.tabuleiro;
    localStorage.setItem('tabuleiro', JSON.stringify(playerTabuleiro))
    localStorage.setItem('navio', JSON.stringify(this.navio));
    this.router.navigate(['pages/gameplay'], {
       state: { tabuleiro: playerTabuleiro }
    });
  }
}
