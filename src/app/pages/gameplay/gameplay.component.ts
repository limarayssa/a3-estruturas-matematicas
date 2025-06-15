import { CommonModule } from '@angular/common';
import { afterNextRender, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gameplay',
  imports: [CommonModule, FormsModule],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css',
})
export class GameplayComponent {
  constructor() {}

  playerTabuleiro: string[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill(''));
  tabuleiroMaquina: string[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill(''));
  colunas: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  navio: string[] = [];
  placarJogador: number = 0;
  placarPC: number = 0;
  coordenadaPlayer: string = 'Teste';
  mensagemPC: string = 'Teste pc';
  coordenadaPC: string = '';
  navioJogador: string[] = [];
  navioPC: string[] = [];

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.playerTabuleiro = JSON.parse(localStorage.getItem('tabuleiro')!);
      this.navioPC = JSON.parse(localStorage.getItem('navio')!);
    }
    this.gerarComputador();
  }

  //gera a matriz do computador
  gerarComputador() {
    if (this.navioPC.length >= 10) {
      const min = 1;
      const max = 10;
      let x: number;
      let y: number;
      const maxNavios = 10;
      for (let i = 0; i < maxNavios; i++) {
        x = Math.floor(Math.random() * (max - min + 1) + min);
        y = Math.floor(Math.random() * (max - min + 1) + min);

        //verifica se essa posicao ja nao foi ocupada 
        if (this.tabuleiroMaquina[x][y] == 'navio') {
          x = Math.floor(Math.random() * (max - min + 1) + min);
          y = Math.floor(Math.random() * (max - min + 1) + min);

          //guarda a posicao das coordenadas
          let posicao = `${this.colunas[y]}${x + 1}`;
          this.tabuleiroMaquina[x][y] = 'navio';
          this.navioPC.push(posicao);
        } 
        //do contrario segue
        else {
          //guarda a posicao das coordenadas
          let posicao = `${this.colunas[y]}${x + 1}`;
          this.tabuleiroMaquina[x][y] = 'navio';
          this.navioPC.push(posicao);
        }
      }
      console.log(this.tabuleiroMaquina);
    }
  }

  atacarNavio() {

  }
}
