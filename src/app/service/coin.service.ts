import { Injectable } from '@angular/core';
import {Market} from '../market';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coin} from '../coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  coin: Coin[];

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/v1/coin';
  private createUrl = 'http://localhost:8080/api/v1/coin';

  list(): Coin[] {
    return this.coin;
  }

  create(coin: Coin) {
    this.coin.push(coin);
  }

  listLive(): Observable<Coin[]> {
    // @ts-ignore
    return this.http.get('http://localhost:8080/api/v1/coin');
  }

  saveLive(coin: any): Observable<any> {
    return this.http.post(this.url, coin);
  }
}
