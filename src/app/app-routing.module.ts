import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCoinComponent} from './coin/list-coin/list-coin.component';
import {CreateCoinComponent} from './coin/create-coin/create-coin.component';
import {CreateMarketComponent} from './market/create-market/create-market.component';
import {ListMarketComponent} from './market/list-market/list-market.component';


const routes: Routes = [
  {path: '', component: ListCoinComponent},
  {path: 'createCoin', component: CreateCoinComponent},
  {path: 'createMarket', component: CreateMarketComponent},
  {path: 'listMarket', component: ListMarketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
