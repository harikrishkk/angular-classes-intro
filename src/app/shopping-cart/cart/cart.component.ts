import { Component } from '@angular/core';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
}
