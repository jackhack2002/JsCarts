import { Component } from '@angular/core';
import { CartService, Product } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

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

  calculateOverallTotal(): void {
    const subtotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    const tax = subtotal * 0.1;
  
    const shippingCharges = 20;
  
    this.overallTotal = subtotal + tax + shippingCharges;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = []; 
  }

  placeOrder(){
    
    this.router.navigate(['dashboard/home']);
    this.clearCart();
  }




}
