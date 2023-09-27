import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampeonatoService {
  key: string = 'test_57a19b964785e16ec809c6e44dbd1e';

  constructor(private httpClient: HttpClient) {}

  getTabelaSerieB(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.key}`,
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(
      'https://api.api-futebol.com.br/v1/campeonatos/2/tabela',
      requestOptions
    );
  }

  getTabelaCampeonato(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.key}`,
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(
      'https://api.api-futebol.com.br/v1/campeonatos',
      requestOptions
    );
  }

  getArtilhariaCampeonato(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.key}`,
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(
      'https://api.api-futebol.com.br/v1/campeonatos/2/artilharia',
      requestOptions
    );
  }
}
