import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getCardData() {
    return this.http.get('https://humber-demo-default-rtdb.firebaseio.com/products.json').subscribe(
      data => console.log(data)
    )
  }
}
