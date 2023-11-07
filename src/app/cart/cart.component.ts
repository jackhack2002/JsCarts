import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  overallTotal: number;

  constructor(private cartService: CartService,private router:Router) {
    this.overallTotal=0;
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cartItems = items;
    });
    this.calculateOverallTotal();
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.cartItems[index].totalPrice = this.cartItems[index].quantity * this.cartItems[index].price;
    this.calculateOverallTotal();
  }
  
  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartItems[index].totalPrice = this.cartItems[index].quantity * this.cartItems[index].price;
      this.calculateOverallTotal();
    }
  }
  

  removeItemFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.calculateOverallTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = []; 
  }

  calculateOverallTotal(): void {
    const subtotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    const tax = subtotal * 0.1;
  
    const shippingCharges = 20;
  
    this.overallTotal = subtotal + tax + shippingCharges;
  }
  
  Checkout(){
    this.router.navigate(['/checkout']);
  }
  
}
