import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  imports: [],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent {
  constructor(private router: Router){}

  iniciar () {
    this.router.navigate(['pages/choose-ships'])
  }
}
