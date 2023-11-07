import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);

  constructor() { }

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity++;
      existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
    } else {
      product.quantity = 1;
      product.totalPrice = product.price;
      this.cartItems.push(product);
    }
  
  }
  

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number; 
}
