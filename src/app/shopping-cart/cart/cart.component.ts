import { Component } from '@angular/core';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { map, Observable, of } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  cart$!: Observable<any[]>;
  cartTotal$!: Observable<number>;
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cart$ = this.cartService.cartItems$;
    this.cartTotal$ = this.cart$.pipe(
      map(cart => {
        return cart.reduce((acc, item) => {
          return acc = acc + (item.price * item.quantity)
        }, 0)
      })
    )
  }


}
