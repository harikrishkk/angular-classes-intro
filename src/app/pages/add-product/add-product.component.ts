import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private productService: ProductsService, private router: Router) {

  }
  onSubmit(form: NgForm) {
    // console.log("FORM IS", form.form.value);
    this.productService.addNewProduct(form.form.value).pipe(
      take(1),
      tap(() => {
        this.router.navigateByUrl('/products')
      })
    ).subscribe();
  }
}
