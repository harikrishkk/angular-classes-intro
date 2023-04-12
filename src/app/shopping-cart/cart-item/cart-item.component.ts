import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  @Input() cartItem!: any;
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;

  constructor(private cartService: CartService) {
    console.log("1. inside constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("3. inside onChanges", changes)
  }
  ngOnInit(): void {
    console.log("2. inside onInit")
  }

  ngAfterViewInit(): void {
    console.log("4. inside ngAfterViewInit")
  }

  ngAfterContentInit(): void {
    console.log("5. inside ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("6. inside ngAfterContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("7. inside ngAfterViewChecked")
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

  ngOnDestroy(): void {
    console.log("8. inside ngOnDestroy")
  }
}
