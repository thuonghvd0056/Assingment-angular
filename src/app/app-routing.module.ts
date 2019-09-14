import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCoinComponent} from './coin/list-coin/list-coin.component';


const routes: Routes = [
  {path: 'list', component: ListCoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
