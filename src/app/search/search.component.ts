import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/products/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  shirts: Product[] = [];
  mobiles: Product[] = [];
  laptop: Product[]= [];
  searchResult:undefined|Product[];

  constructor(private router: Router, private cartService: CartService, private productService: ProductService,private activeRoute:ActivatedRoute) {}

  addToCart(product: Product): void {
    if (localStorage.getItem('IsAuthorized')) {
      this.cartService.addToCart(product);
      alert("Item added to Cart..")
    } else {
      alert("Login to continue ...");
      this.router.navigate(['/login']);
    }
    
  }

  ngOnInit(): void {
  
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.productService.searchProduct(query).subscribe((result)=>{
      this.searchResult = result ;
      console.warn(result);
      
    })

  
  }
  
  
}
