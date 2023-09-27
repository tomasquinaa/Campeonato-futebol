import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.css'],
})
export class CampeonatoComponent implements OnInit {
  tabela!: any;

  constructor(private campeonatoService: CampeonatoService) {}

  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaCampeonato();
  }
}
