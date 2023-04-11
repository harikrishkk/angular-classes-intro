import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart.routing.module';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FontAwesomeModule
  ]
})
export class ShoppingCartModule { }
