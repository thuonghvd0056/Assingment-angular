import { Component, OnInit } from '@angular/core';
import {Coin} from '../../coin';
import {MarketService} from '../../service/market.service';
import {HttpClient} from '@angular/common/http';
import {CoinService} from '../../service/coin.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {
  coins: Coin[];
  constructor(private coinService: CoinService, private http: HttpClient) { }

  ngOnInit() {
    this.coinService.listLive().subscribe( {
      next: value => {
        this.coins = value;
        console.log(value);
      }
    });

  }

}
