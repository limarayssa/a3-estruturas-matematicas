import { CommonModule } from '@angular/common';
import { afterNextRender, Component } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  imports: [CommonModule],
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
  ngOnInit() {
    debugger;
    if (typeof localStorage !== 'undefined') {
       this.playerTabuleiro = JSON.parse(localStorage.getItem('tabuleiro')!);
    } 
  }

    gerarMaquina(){
      for (let i = 1; i >= 10; i++) {
        let min = Math.ceil(1);
        let max = Math.floor(10);
        let x = (Math.floor(Math.random() *  (min - max) + min));
        let y = (Math.floor(Math.random() *  (min - max) + min));

        
      }

  }
}
