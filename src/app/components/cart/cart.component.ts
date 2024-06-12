import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../product-list/Product-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList$: Observable<Product[]>;

  constructor(private cart: CartService) {
    this.cartList$ = this.cart.cartList.asObservable();
  }

  removeFromCart(product: Product): void {
    this.cart.removeFromCart(product);
  }
}
