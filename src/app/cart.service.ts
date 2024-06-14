// cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './components/product-list/Product-list';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {}

  addToCart(product: Product) {
    let item: Product | undefined = this._cartList.find((v1) => v1.name == product.name);
    if (!item) {
      this._cartList.push({ ...product });
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }

  removeFromCart(product: Product, products: Product[]) {
    const itemIndex = this._cartList.findIndex((v1) => v1.name == product.name);
    if (itemIndex > -1) {
      const cartItem = this._cartList[itemIndex];
      this._cartList.splice(itemIndex, 1);
      
      let originalProduct = products.find(p => p.name === product.name);
      if (originalProduct) {
        originalProduct.stock += product.quantity;
      }

      this.cartList.next(this._cartList);
    }
  }
}
