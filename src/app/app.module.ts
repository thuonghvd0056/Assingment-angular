import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMarketComponent } from './market/create-market/create-market.component';
import { ListMarketComponent } from './market/list-market/list-market.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateCoinComponent } from './coin/create-coin/create-coin.component';
import { ListCoinComponent } from './coin/list-coin/list-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMarketComponent,
    ListMarketComponent,
    CreateCoinComponent,
    ListCoinComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
