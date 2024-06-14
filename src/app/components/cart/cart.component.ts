// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { ProductService } from '../../product.service';
import { Product } from '../product-list/Product-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList$: Observable<Product[]>;
  products: Product[] = [];

  constructor(private cart: CartService, private productService: ProductService) {
    this.cartList$ = this.cart.cartList.asObservable();
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  removeFromCart(product: Product): void {
    this.cart.removeFromCart(product, this.products);
    this.productService.updateProducts(this.products); // Actualizar productos
  }
}
