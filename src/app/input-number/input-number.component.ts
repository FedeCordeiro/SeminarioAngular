import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/Product-list';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
//
  constructor(){}

  @Input()
  quantity!: number;
  @Input()
  stock!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>
  @Output()
  stockChange: EventEmitter<number> = new EventEmitter<number>
  @Output()
  maxStock: EventEmitter<number> = new EventEmitter<number>;

  upQuantity (): void {
    if (this.quantity < this.stock) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.maxStock.emit(this.stock);
    }
  }

  downQuantity (): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
