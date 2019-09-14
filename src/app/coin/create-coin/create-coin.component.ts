import { Component, OnInit } from '@angular/core';
import {CoinModel} from '../../coin-model';
import {CoinService} from '../../service/coin.service';

@Component({
  selector: 'app-create-coin',
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.css']
})
export class CreateCoinComponent implements OnInit {
  coin: CoinModel = new CoinModel();
  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit() {
  }
  doSubmit() {
    this.coinService.saveLive(this.coin).subscribe(res => {
        location.reload();
      }, error => {
        alert('loi');
      }
    );
  }
}
