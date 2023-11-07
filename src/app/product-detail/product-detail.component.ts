import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/cart/cart.service';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  
  
  products: Product[]=[];

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.productService.getDetail().subscribe((product: Product[])=>{
      this.products= product;
    })

    // this.productService.getShirts().subscribe((shirts: Product[]) => {
    //   this.shirts = shirts;
  }

  ngOnInit(): void {
      this.products = this.route.snapshot.data['product'];
  }





}