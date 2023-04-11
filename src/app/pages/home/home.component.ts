import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards$!: Observable<Card[]>;

  constructor(private productService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cards$ = this.productService.getCardData();
  }

  handleCardSelect(card: any) {
    this.cartService.addItemsToCart(card);
  }
}
