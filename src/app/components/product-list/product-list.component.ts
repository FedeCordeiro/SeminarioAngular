import { Component } from '@angular/core';
import { Product } from './Product-list';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {

  products: Product[] = [{
      name: "CAMISETA OFICIAL BOCA JUNIORS",
      description: "Luce los colores del club con esta camiseta oficial de Boca Juniors. Temporada 2024.",
      size: "XL",
      price: 125000,
      stock: 5,
      image: "assets/img/camiseta.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "CAMISETA OFICIAL ARQUERO BOCA JUNIORS",
      description: "Protege el arco con estilo con la camiseta de arquero oficial de Boca Juniors. Temporada 2024.",
      size: "L",
      price: 100000,
      stock: 10,
      image: "assets/img/camisetaArquero.jpeg",
      clearence: true,
      quantity: 0,
    },
    {
      name: "CAMPERON INVIERNO BOCA JUNIORS",
      description: "Mantente abrigado con elegancia con la campera oficial de Boca Juniors.",
      size: "M",
      price: 170000,
      stock: 2,
      image: "assets/img/campera.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "CAMPERA ALGODON ADIDAS",
      description: "Comodidad y estilo con la campera de algodón oficial de Boca Juniors.",
      size: "L",
      price: 80000,
      stock: 0,
      image: "assets/img/camperaAlgodon.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "CAMPERA HOMBRE",
      description: "Campera para hombre con el escudo de Boca Juniors. Confeccionada 100% con algodon." ,
      size: "XL",
      price: 110000,
      stock: 3,
      image: "assets/img/camperaHombre.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "CAMPERA MUJER",
      description: "Diseño exclusivo para las aficionadas. Confeccionada 100% con algondon.",
      size: "M",
      price: 110000,
      stock: 0,
      image: "assets/img/camperaMujer.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "PANTALON ALGODON",
      description: "Completa tu conjunto con el pantalón de entrenamiento oficial de Boca Juniors. Temporada 2024.",
      size: "L",
      price: 90000,
      stock: 6,
      image: "assets/img/pantalon.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "SHORT OFICIAL BOCA JUNIORS",
      description: "Libertad de movimiento con estilo. Short oficial Boca Juniors. Temporada 2024.",
      size: "M",
      price: 55000,
      stock: 7,
      image: "assets/img/short.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "CAMISETA ENTRENAMIENTO BOCA JUNIORS",
      description: "Luce casual con la remera oficial de Boca Juniors.",
      size: "S",
      price: 70000,
      stock: 10,
      image: "assets/img/remera.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "MEDIAS LARGAS CABJ",
      description: "Complementa tu outfit con las medias oficiales del club.",
      size: "Única",
      price: 12000,
      stock: 20,
      image: "assets/img/medias.jpeg",
      clearence: false,
      quantity: 0,
    }
  ];
  
  constructor (private cart: CartService) {
  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
        this.cart.addToCart(product);
        product.stock -= product.quantity;
        product.quantity = 0;
    } else {
        alert("Por favor, selecciona una cantidad mayor que 0.");
    }
}

  maxStock(m: number) {
    alert ("NO HAY STOCK");
  }
  

}
