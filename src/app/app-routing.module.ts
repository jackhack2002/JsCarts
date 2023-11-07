import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {path:'dashboard', component:DashboardComponent,

  children:[
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'details', component:ProductDetailComponent},
    {path:'profile', component:ProfileComponent},
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  ]

},

 
 
 {path:'login',component:UserLoginComponent},
{path:'register',component:UserRegistrationComponent},
{path:'cart',component:CartComponent},
{path:'checkout', component:CheckoutComponent},
{path:'' ,redirectTo:'dashboard', pathMatch:'full'},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
