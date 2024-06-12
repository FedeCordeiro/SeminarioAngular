import { Injectable } from '@angular/core';
import { Product } from './components/product-list/Product-list';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  // Esto indica que este servicio será un singleton y estará disponible en toda la aplicación.
  providedIn: 'root'
})
export class CartService {
  // Una lista privada para almacenar los productos en el carrito.
  private _cartList: Product[] = [];
  // Un BehaviorSubject para notificar a los suscriptores cuando cambia el contenido del carrito.
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]); 

  constructor() { }

  // Método para agregar un producto al carrito.
  addToCart(product: Product) {
    // Busca si el producto ya está en el carrito.
    let item: Product | undefined = this._cartList.find((v1) => v1.name == product.name);
    // Si el producto no está en el carrito, simplemente agrégalo.
    if (!item) {
      // Se utiliza spread operator para crear una copia del producto y no modificar el original.
      this._cartList.push({ ...product });
      // Si el producto ya está en el carrito, actualiza la cantidad.
    } else {
      // Se asume que existe la propiedad 'quantity' en el objeto Product.
      item.quantity += product.quantity;
    }
    // Notifica a los suscriptores del BehaviorSubject que el contenido del carrito ha cambiado.
    this.cartList.next(this._cartList); 
  }

  // Método para eliminar un producto del carrito.
  removeFromCart(product: Product) {
    // Encuentra el índice del producto en el carrito.
    const itemIndex = this._cartList.findIndex((v1) => v1.name == product.name);
    // Si el producto está en el carrito. 
    if (itemIndex > -1) { 
      // Almacena el producto que se va a eliminar.
      const cartItem = this._cartList[itemIndex];
      // Elimina el producto del carrito. 
      this._cartList.splice(itemIndex, 1);
      // Notifica a los suscriptores del BehaviorSubject que el contenido del carrito ha cambiado. 
      this.cartList.next(this._cartList); 
    }
  }
}