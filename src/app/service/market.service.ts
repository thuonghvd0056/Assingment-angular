import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Market} from '../market';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MarketModel} from '../market-model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  market: Market[];

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/v1/market';
  private createUrl = 'http://localhost:8080/api/v1/market';

  list(): Market[] {
    return this.market;
  }

  create(market: Market) {
    this.market.push(market);
  }

  listLive(): Observable<Market[]> {
    // @ts-ignore
    return this.http.get('http://localhost:8080/api/v1/market');
  }

  saveLive(market: any): Observable<any> {
    return this.http.post(this.url, market);
  }
}
