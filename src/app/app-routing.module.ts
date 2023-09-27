import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TabelaclassificativaComponent } from './components/tabelaclassificativa/tabelaclassificativa.component';
import { CampeonatoComponent } from './components/campeonato/campeonato.component';
import { ArtilhariacampeonatoComponent } from './components/artilhariacampeonato/artilhariacampeonato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classificacao', component: TabelaclassificativaComponent },
  { path: 'campeonato', component: CampeonatoComponent },
  { path: 'marcadores', component: ArtilhariacampeonatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
