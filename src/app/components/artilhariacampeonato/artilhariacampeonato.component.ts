import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-artilhariacampeonato',
  templateUrl: './artilhariacampeonato.component.html',
  styleUrls: ['./artilhariacampeonato.component.css'],
})
export class ArtilhariacampeonatoComponent implements OnInit {
  artilharia: any;

  constructor(private campeonatoService: CampeonatoService) {}

  ngOnInit(): void {
    this.artilharia = this.campeonatoService.getArtilhariaCampeonato();
  }
}
