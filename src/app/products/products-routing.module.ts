import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { ShirtsComponent } from './shirts/shirts.component';

const routes: Routes = [{ path: '', component: ProductsComponent,

children:[
  {path:'mobile', component:MobilesComponent},
  {path:'laptop', component:LaptopsComponent},
  {path:'shirt', component:ShirtsComponent}
]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
