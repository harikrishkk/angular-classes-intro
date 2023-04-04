import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { StockPipe } from './pipes/stock/stock.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component'
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    FooterComponent,
    StockPipe,
    RatingComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    NavbarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    StockPipe
  ]
})
export class AppModule { }
