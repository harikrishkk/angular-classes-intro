import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const shoppingCartRoutes: Routes = [
  { path: '', component: CartComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingCartRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {
}
