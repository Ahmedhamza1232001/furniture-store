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
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
