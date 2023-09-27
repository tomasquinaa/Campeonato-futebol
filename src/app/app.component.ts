import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from './services/campeonato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //title = 'futebolbrasil';
  tabela!: any;
  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieB();
  }

  constructor(private campeonatoService: CampeonatoService) {}
}
