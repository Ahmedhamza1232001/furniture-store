import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductDetailsComponent } from './modules/product/product-details/product-details.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { NavigationComponent } from './core/header/navigation/navigation.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { LoggingComponent } from './logging/logging.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UserProfileComponent,
    ShoppingCartComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoggingComponent,
    TrackingComponent,
    ProductCheckoutComponent,
    ConfirmationComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
