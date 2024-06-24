import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '@core/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Observable<Product[]> = this.productService.getProducts();

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
