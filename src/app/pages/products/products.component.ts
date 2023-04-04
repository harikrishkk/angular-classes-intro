
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$!: Observable<any>;

  constructor(private productService: ProductsService) {

  }
  ngOnInit(): void {
    this.products$ = this.productService.getAllProductsByCategories();
  }

  getCategories(products: any) {
    return Object.keys(products);
  }
}
