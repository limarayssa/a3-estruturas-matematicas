import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-ships',
  imports: [CommonModule],
  templateUrl: './choose-ships.component.html',
  styleUrl: './choose-ships.component.css',
})
export class ChooseShipsComponent {
  tabuleiro: string[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill('vazio'));
  colunas: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  navio: string[] = [];
  maxNavios = 10;

  selecionarNavio(x: number, y: number) {
    //alert(`Campo escolhido: ${this.colunas[y]}${x + 1}`);
    const posicao = `${this.colunas[y]}${x + 1}`;
    const isSelected = this.navio.includes(posicao);

    if (isSelected) {
      this.navio = this.navio.filter((p) => p !== posicao);
      this.tabuleiro[x][y] = 'vazio';
    } else {
      if (this.navio.length < this.maxNavios) {
        // Selecionar
        this.navio.push(posicao);
        this.tabuleiro[x][y] = 'navio';
      } else {
        alert('Você já posicionou todos os navios.');
      }
    }

    console.log(this.navio)
  }

  clear() {
    // debugger
    // alert('apertei clear aki');
    // console.log('apertei clear aki')
      this.tabuleiro = Array(10).fill(null).map(() => Array(10).fill('vazio'));
      this.navio = [];
  }
}
