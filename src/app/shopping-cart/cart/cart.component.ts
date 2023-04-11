import { Component } from '@angular/core';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.cartItems$.subscribe(data => console.log(data))
  }
}
