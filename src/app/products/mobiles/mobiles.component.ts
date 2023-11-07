import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, Product } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent {

  mobiles: Product[] = [];

  constructor(private router: Router, private cartService: CartService, private productService: ProductService) {

    this.productService.getMobiles().subscribe((mobiles: Product[]) => {
      this.mobiles = mobiles;
    });
   
  }


  navigateToProductDetails(product: Product):void {
    this.productService.productDetail(product);
    this.router.navigate(['/dashboard/details']);
  }

  addToCart(product: Product): void {
    if (localStorage.getItem('IsAuthorized')) {
      this.cartService.addToCart(product);
    } else {
      alert("Login to continue ...");
      this.router.navigate(['/login']);
    }
    
  }

}
