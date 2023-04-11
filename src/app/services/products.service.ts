import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getCardData(): Observable<Card[]> {
    return this.http.get('https://humber-demo-default-rtdb.firebaseio.com/products.json').pipe(
      map(responseObj => {
        const resultArr = [];
        const objResponse = responseObj as Card[];
        for (let item in objResponse) {
          resultArr.push({ ...objResponse[item], id: item })
        }
        return resultArr;
      })
    )
  }

  getAllProductsByCategories(): Observable<any> {
    return this.http.get('https://humber-demo-default-rtdb.firebaseio.com/products.json').pipe(
      map(responseObj => {
        const obj = {} as any;
        const categories: string[] = [];
        const objResponse = responseObj as Card[];

        for (let item in objResponse) {
          if (categories.indexOf(objResponse[item].category) === -1) {
            categories.push(objResponse[item].category)
          }
        }
        categories.forEach(cat => {
          obj[cat] = [];
          for (let item in objResponse) {
            if (objResponse[item].category === cat) {
              obj[cat].push({ ...objResponse[item], id: item })
            }
          }
        })
        return obj;
      })
    )
  }

  getAProductById(id: string) {
    return this.http.get(`https://humber-demo-default-rtdb.firebaseio.com/products/${id
      }.json`)
  }

  addNewProduct(product: any): Observable<any> {
    console.log("Sending:", product)
    return this.http.post(`https://humber-demo-default-rtdb.firebaseio.com/products.json`, product)
  }
}
