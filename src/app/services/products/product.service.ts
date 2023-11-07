
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private productdetail: Product[]=[];
  private productSubject = new BehaviorSubject<Product[]>(this.productdetail);

  productDetail(product: Product):any {
    const Product = this.productdetail.find(item => item.id === product.id);    
    console.log(Product);
  }

  getDetail(): Observable<Product[]>{
    return this.productSubject.asObservable();
  }

  getShirts(): Observable<Product[]> {
    return of(this.shirts);
  }

  getMobiles(): Observable<Product[]> {
    return of(this.mobiles);
  }

  getLaptop(): Observable<Product[]> {
    return of(this.laptop);
  }

  private shirts: Product[] = [
    { id: 's1', name: 'Shirt 1', price: 500, image: '../../assets/shirt/shirt1.jpeg', quantity:1, totalPrice: 0 },
    { id: 's2', name: 'Shirt 2', price: 750, image: '../../assets/shirt/shirt2.jpeg', quantity:1, totalPrice: 0 },
    { id: 's3', name: 'Shirt 3', price: 500, image: '../../assets/shirt/shirt3.jpeg', quantity:1, totalPrice: 0 },
    { id: 's4', name: 'Shirt 4', price: 750, image: '../../assets/shirt/shirt4.jpeg', quantity:1, totalPrice: 0 },
    { id: 's5', name: 'Shirt 5', price: 500, image: '../../assets/shirt/shirt5.jpeg', quantity:1, totalPrice: 0 },
    { id: 's6', name: 'Product 6', price: 750, image: '../../assets/shirt/shirt6.jpeg', quantity:1, totalPrice:0 },
    { id: 's7', name: 'Product 7', price: 500, image: '../../assets/shirt/shirt7.jpeg', quantity:1, totalPrice:0 },
    { id: 's8', name: 'Product 8', price: 750, image: '../../assets/shirt/shirt8.jpeg', quantity:1, totalPrice:0 },
    { id: 's9', name: 'Product 9', price: 500, image: '../../assets/shirt/shirt9.jpeg', quantity:1, totalPrice:0 },
    { id: 's10', name: 'Product 10', price: 750, image: '../../assets/shirt/shirt10.jpeg', quantity:1, totalPrice:0 },
  ];

  private mobiles: Product[] = [
    { id: 'm1', name: 'Mobile 1', price: 500, image: '../../assets/mobile/mobile1.webp', quantity:1, totalPrice: 0 },
    { id: 'm2', name: 'Mobile 2', price: 750, image: '../../assets/mobile/mobile2.jpg', quantity:1, totalPrice: 0 },
    { id: 'm3', name: 'Mobile 3', price: 500, image: '../../assets/mobile/mobile3.png', quantity:1, totalPrice: 0 },
    { id: 'm4', name: 'Mobile 4', price: 750, image: '../../assets/mobile/mobile4.webp', quantity:1, totalPrice: 0 },
    { id: 'm5', name: 'Mobile 5', price: 500, image: '../../assets/mobile/mobile5.jpeg', quantity:1, totalPrice: 0 },
    { id: 'm6', name: 'Product 6', price: 750, image: '../../assets/mobile/mobile1.webp', quantity:1, totalPrice: 0 },
    { id: 'm7', name: 'Product 7', price: 500, image: '../../assets/mobile/mobile2.jpg', quantity:1, totalPrice: 0 },
    { id: 'm8', name: 'Product 8', price: 750, image: '../../assets/mobile/mobile3.png', quantity:1, totalPrice: 0 },
    { id: 'm9', name: 'Product 9', price: 500, image:'../../assets/mobile/mobile4.webp', quantity:1, totalPrice: 0},
    { id: 'm10', name: 'Product 10', price: 750,image: '../../assets/mobile/mobile5.jpeg' , quantity:1, totalPrice: 0},
  ];

  private laptop: Product[] = [
    { id: 'l1', name: 'HP Laptop 39.6 cm 15s-eq2212AU', price: 34199, image: '../../assets/laptop/laptop1.png', quantity:1, totalPrice: 0 },
    { id: 'l2', name: 'HP Stream 14-ax040wm 14"', price: 21343.88, image: '../../assets/laptop/laptop2.png', quantity:1, totalPrice: 0 },
    { id: 'l3', name: 'HP 14 Series 14" 14-dq0050nr', price: 72900, image: '../../assets/laptop/laptop3.png', quantity:1, totalPrice: 0 },
    { id: 'l4', name: 'HP Pavilion 15-eg2009TU - Silver', price: 68999, image: '../../assets/laptop/laptop4.png', quantity:1, totalPrice: 0 },
    { id: 'l5', name: 'Lenovo Legion 5i Pro', price: 144990, image: '../../assets/laptop/laptop5.png', quantity:1, totalPrice: 0 }
  ];

}
