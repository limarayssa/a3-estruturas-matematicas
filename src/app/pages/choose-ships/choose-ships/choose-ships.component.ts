import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-ships',
  imports: [CommonModule],
  templateUrl: './choose-ships.component.html',
  styleUrl: './choose-ships.component.css'
})
export class ChooseShipsComponent {

  tabuleiro: string[][] = Array(10).fill(null).map(() => Array(10).fill('vazio'));
  navio: string[] = [];
  // colunas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];



}
