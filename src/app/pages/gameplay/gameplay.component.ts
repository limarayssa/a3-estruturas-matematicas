import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-gameplay',
  imports: [CommonModule, FormsModule],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css',
})
export class GameplayComponent {
  constructor(private router: Router) {}

  playerTabuleiro: string[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill(''));
  tabuleiroMaquina: string[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill(''));
  colunas: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  navio: string[] = [];

  placarJogador: number = 0;
  placarBot: number = 0;

  coordenadaPlayer: string = '';
  mensagemBot: string = '';
  coordenadaBot: string = '';
  mensagemPlayer: string = '';
  final = false;

  navioJogador: string[] = [];
  navioPC: string[] = [];
  min = 0;

  max = 9;
  x: number = 0;
  y: number = 0;

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.playerTabuleiro = JSON.parse(localStorage.getItem('tabuleiro')!);
      this.navioJogador = JSON.parse(localStorage.getItem('navio')!);
    }
    this.gerarComputador();
  }

  //gera a matriz do computador
  gerarComputador() {
      const maxNavios = 10;
      let i = 0;
      while (i < maxNavios) {
        this.geraCoordenadas();
        //verifica se essa posicao ja nao foi ocupada
        if (this.tabuleiroMaquina[this.x][this.y] !== 'navio') {
          this.guardaPosicao();
          i++;
      }
      console.log('nao grita');
      console.log(this.navioPC);
    }
  }

  geraCoordenadas() {
    this.x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.y = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  guardaPosicao() {
    let posicao = `${this.colunas[this.y]}${this.x + 1}`;
    this.tabuleiroMaquina[this.x][this.y] = 'navio';
    this.navioPC.push(posicao);
  }

  atacarNavios() {
    this.limparMensagens();

    const letra = this.coordenadaPlayer.charAt(0).toUpperCase();
    const numero = parseInt(this.coordenadaPlayer.slice(1)) - 1;

    const y = this.colunas.indexOf(letra);
    const x = numero;

    if (x < 0 || x > 9 || y < 0 || y > 9) {
      this.mensagemBot = 'Coordenada inválida!';
      setTimeout(() => this.ataquePC(), 1000);
      return;
    }

    if (this.tabuleiroMaquina[x][y] === 'navio') {
      this.mensagemBot = 'Acertou :(';
      this.tabuleiroMaquina[x][y] = 'acertado';
      this.somarPontos('player');
      setTimeout(() => this.ataquePC(), 1000);
    } else if (this.tabuleiroMaquina[x][y] === 'acertado') {
      this.mensagemBot = 'Você já atacou aqui!';
      setTimeout(() => this.ataquePC(), 1000);
    } else {
      this.mensagemBot = 'Errou!';
      setTimeout(() => this.ataquePC(), 1000);
    }

    this.coordenadaPlayer = '';
  }

  ataquePC() {
    this.geraCoordenadas();
    let posicao = `${this.colunas[this.y]}${this.x + 1}`;
    this.coordenadaBot = posicao;

    if (this.playerTabuleiro[this.x][this.y] === 'navio') {
      setTimeout(() => {
        this.mensagemPlayer = 'Bot acertou :( Sua vez!';
        this.playerTabuleiro[this.x][this.y] = 'acertado'; // marca que já foi atacado
        this.somarPontos('bot');
      }, 1000);
    } else if (this.playerTabuleiro[this.x][this.y] === 'acertado') {
      setTimeout(() => {
        this.mensagemPlayer = 'Esse campo já está marcado!';
      }, 1000);
    } else {
      setTimeout(() => {
        this.mensagemPlayer = 'Bot errou :) Sua vez!';
      }, 1000);
    }
  }

  limparMensagens() {
    this.mensagemBot = '';
    this.coordenadaBot = '';
    this.mensagemPlayer = '';
  }

  somarPontos(jogador: string) {
    if (jogador == 'player') {
      this.placarJogador++;
      if (this.placarJogador == 10) {
        this.finalJogo();
      }
    } else if (jogador == 'bot') {
      this.placarBot++;
      if (this.placarBot == 10) {
        this.finalJogo();
      }
    }
  }

  celebrate() {
    const duration = 10000;
    confetti({
      particleCount: 500,
      spread: 200,
      origin: { y: 0.5 },
      colors: ['#FF4500', '#008080', '#FFD700'],
    });
    setTimeout(() => confetti.reset(), duration);
  }

  finalJogo() {
    this.final = true;
    if (this.placarJogador == 10) {
      this.mensagemPlayer = 'Ganhamos :)))';
    } else if (this.placarBot == 10) {
      this.mensagemPlayer = 'Perdemos';
    }
    this.celebrate();
    setTimeout(() => this.celebrate(), 1000);
    setTimeout(() => this.router.navigate(['pages/final']), 1000);
  }
}
