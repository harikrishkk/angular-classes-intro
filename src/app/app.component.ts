import { Component, OnInit } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Card } from './model/card.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'humber-demo';
  faDumpster = faDumpster;
  cards$!: Observable<Card[]>;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.cards$ = this.productService.getCardData();
  }

  handleCardSelect(card: any) {
    console.log("Selected", card)
  }
}
