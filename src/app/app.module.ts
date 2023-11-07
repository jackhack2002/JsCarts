import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/compat/storage'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFireModule } from '@angular/fire/compat';
import { UserInfoService } from './services/user/user-info.service';



const firebaseConfig = {
  apiKey: "AIzaSyAskkATVU4YWFvF119TREfLHQ9tPhb27cs",
  authDomain: "j-s-cart-43e4d.firebaseapp.com",
  projectId: "j-s-cart-43e4d",
  storageBucket: "j-s-cart-43e4d.appspot.com",
  messagingSenderId: "1083234590925",
  appId: "1:1083234590925:web:dbc61fb26b945f6a288984"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserProfileComponent,
    OrderHistoryComponent,
    CarouselComponent,
    PagenotfoundComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
