import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  
  currentImageIndex: number = 0;
  totalImages: number = 5; // Total number of images in the slider
  imageChangeSubscription: Subscription = new Subscription();

  ngOnInit() {
    // Start the image carousel with a 3-second interval
    this.imageChangeSubscription = interval(3000).subscribe(() => {
      this.nextImage();
    });
  }

  
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
  }
  
  ngOnDestroy() {
    // Unsubscribe from the image change interval when the component is destroyed
    this.imageChangeSubscription.unsubscribe();
  }



}
