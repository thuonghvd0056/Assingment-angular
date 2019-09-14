import { Component, OnInit } from '@angular/core';
import {Market} from '../../market';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MarketService} from '../../service/market.service';
import {Observable} from 'rxjs';
import {MarketModel} from '../../market-model';

@Component({
  selector: 'app-create-market',
  templateUrl: './create-market.component.html',
  styleUrls: ['./create-market.component.css']
})
export class CreateMarketComponent implements OnInit {

  market: MarketModel = new MarketModel();
  constructor(
    private marketService: MarketService
  ) { }

  ngOnInit() {
  }

  doSubmit() {
    this.marketService.saveLive(this.market).subscribe(res => {
      location.reload();
    }, error => {
      alert('loi');
    }
    );
  }
}
