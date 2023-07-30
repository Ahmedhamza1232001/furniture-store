import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = environment.apiUrl; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Method to fetch the list of products from the server
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`).pipe(
      catchError((error: any) => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error('Error fetching products')); // Use updated throwError
      })
    );
  }
}
