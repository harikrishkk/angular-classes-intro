
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { ProductsService } from 'src/app/services/products.service';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  currentId!: string;
  currentProduct$!: Observable<any>;
  constructor(private route: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit() {
    this.currentId = this.route.snapshot.params["id"];
    this.currentProduct$ = this.productService.getAProductById(this.currentId)
  }

  getGalleryImages(product: any) {
    const gallery: any[] = [];
    product.images.forEach((image: any) => {
      gallery.push(new ImageItem({ src: image, thumb: image }))
    })
    return gallery;
  }

}
