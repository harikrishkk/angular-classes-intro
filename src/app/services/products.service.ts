import { Injectable } from '@angular/core';
import { cardData } from '../components/card/card.data';
// Try removing the providedIn root and see what happens

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private cardData = cardData;

  constructor() { }

  getCardData() {
    return this.cardData;
  }
}
