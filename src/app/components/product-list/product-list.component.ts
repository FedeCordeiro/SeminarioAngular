// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from './Product-list';
import { CartService } from '../../cart.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private cart: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
      this.productService.updateProducts(this.products); // Actualizar productos
    } else {
      alert('INGRESE UNA CANTIDAD MAYOR A CERO (0)');
    }
  }

  maxStock(m: number) {
    alert('NO HAY MÁS STOCK');
  }

  page: number = 1;
  pageSize: number = 5; // Cantidad de productos por página

  get paginatedProducts(): Product[] {
    const start = (this.page - 1) * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }
}
