import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>([]);
  private cartArr: any[] = [];

  constructor() { }

  get cartItems$() {
    return this.cartItems.asObservable();
  }

  addItemsToCart(item: any) {
    const isAddedIndex = this.cartArr.findIndex(cartItem => cartItem.id === item.id);

    if (isAddedIndex === -1) {

      let cart = {
        id: item.id,
        quantity: 1,
        price: item.price,
        productName: item.title
      }
      this.cartArr.push(cart);
      this.cartItems.next(this.cartArr);
    }
    else {
      let cart = this.cartArr.map(cartItem => {
        return cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      })
      this.cartItems.next(cart);
    }
  }
}
