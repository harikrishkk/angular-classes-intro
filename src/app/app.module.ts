import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { StockPipe } from './pipes/stock/stock.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    FooterComponent,
    StockPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    StockPipe
  ]
})
export class AppModule { }
