import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtConfig } from '../../../auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'your-api-url'; // Replace with your API base URL
  private readonly tokenKey = 'access_token';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.isAuthenticated()
  );
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Get the currently logged-in user's JWT token
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if the user is currently authenticated
  private isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  // Log in the user and save the JWT token in local storage
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          if (response && response.token) {
            localStorage.setItem(this.tokenKey, response.token);
            this.isAuthenticatedSubject.next(true);
          }
        })
      );
  }

  // Log out the user and remove the JWT token from local storage
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  // Get the currently logged-in user's JWT token
  getAuthToken(): string | null {
    return this.getToken();
  }

  // Example: Get user profile data from the server
  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  // Example: Update user profile on the server
  updateUserProfile(profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile`, profileData);
  }
}
