import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route to the product listing page
  { path: 'products', component: ProductListComponent }, // Product listing page
  { path: 'products/:id', component: ProductDetailsComponent }, // Product details page with dynamic ID
  { path: 'profile', component: UserProfileComponent }, // User profile page
  { path: 'cart', component: ShoppingCartComponent }, // Shopping cart page
  { path: '**', redirectTo: '/products' }, // Redirect to the product listing page for any unknown route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
