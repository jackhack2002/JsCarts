import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, Product } from '../services/cart/cart.service';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  shirts: Product[] = [];
  mobiles: Product[] = [];
  laptop: Product[]= [];

  constructor(private router: Router, private cartService: CartService, private productService: ProductService) {
    this.productService.getShirts().subscribe((shirts: Product[]) => {
      this.shirts = shirts;
    });

    this.productService.getMobiles().subscribe((mobiles: Product[]) => {
      this.mobiles = mobiles;
    });
    this.productService.getLaptop().subscribe((laptop: Product[]) => {
      this.laptop = laptop;
    });
  }

  addToCart(product: Product): void {
    if (localStorage.getItem('IsAuthorized')) {
      this.cartService.addToCart(product);
    } else {
      alert("Login to continue ...");
      this.router.navigate(['/login']);
    }
    
  }
 
  navigateToProductDetails(product: Product):void {
    this.productService.productDetail(product);
    this.router.navigate(['/dashboard/details']);
  }

  navigateToShirt():void {
    this.router.navigate(['dashboard/products/shirt']);
  }

  navigateToMobile():void {
    this.router.navigate(['dashboard/products/mobile']);
  }

  navigateToLaptop():void{
    this.router.navigate(['dashboard/products/laptop']);
  }

  ViewDetails(){
    this.productService.getDetail().subscribe
  }


  
}
