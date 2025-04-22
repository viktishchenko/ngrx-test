import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from './cart';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  cartCount = computed(() =>
    this.cartItems().reduce((qutAcc, item) => qutAcc + item.quantity, 0)
  );

  eLength = effect(() =>
    console.log('this.cartItems.length :>> ', this.cartItems().length)
  );

  addToCard(product: Product) {
    this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
  }
}
