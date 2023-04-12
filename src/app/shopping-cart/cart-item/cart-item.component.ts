import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!: any;
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;

  constructor(private cartService: CartService) {

  }

  addItem(id: string) {
    this.cartService.addQuantity(id);
  }

  decrementItem(id: string) {
    this.cartService.removeQuantity(id);
  }

  deleteItem(id: string) {
    this.cartService.deleteItem(id);
  }
}
