import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-tabelaclassificativa',
  templateUrl: './tabelaclassificativa.component.html',
  styleUrls: ['./tabelaclassificativa.component.css'],
})
export class TabelaclassificativaComponent implements OnInit {
  tabela!: any;

  constructor(private campeonatoService: CampeonatoService) {}

  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieB();
  }
}
