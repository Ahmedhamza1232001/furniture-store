import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: any[] = [];
  private productSubscription: Subscription | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productSubscription = this.productService.getProducts().subscribe(
      (products: any[]) => {
        this.products = products;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
        // Handle the error, show a message, or redirect to an error page
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to avoid memory leaks
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
