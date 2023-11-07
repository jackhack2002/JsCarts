import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { LaptopsComponent } from './laptops/laptops.component';


@NgModule({
  declarations: [
    ProductsComponent,
    MobilesComponent,
    ShirtsComponent,
    LaptopsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
