import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SbifService {

  baseUrl;
  private apiKey =  environment.apiKey;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
   }

  //GET - USD values for an specific year and month
  getMonthlyUSD(year, month) {
    return this._http.get(this.baseUrl + `/dolar/${year}/${month}?apikey=${this.apiKey}&formato=json`)
      .pipe(map(res => res));
  }

  //GET - UF values for an specific year and month
  getMonthlyUF(year, month) {
    return this._http.get(this.baseUrl + `/uf/${year}/${month}?apikey=${this.apiKey}&formato=json`)
    .pipe(map(res => res));
  }

  //GET - TMC values for an specific year and month
  getMonthlyTMC(year, month) {
    return this._http.get(this.baseUrl + `/tmc/${year}/${month}?apikey=${this.apiKey}&formato=json`)
    .pipe(map(res => res));
  }

}

