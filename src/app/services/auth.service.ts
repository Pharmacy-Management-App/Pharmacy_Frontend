import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
 
@Injectable({ providedIn: 'root' })
export class AuthService {
 
  private readonly TOKEN_KEY = 'pharmacy_token';
  private readonly USER_KEY  = 'pharmacy_user';
  private apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) {}
 
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
      })
    );
  }
 
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
 
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
 
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
 
  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
 
  getUserRole(): string | null {
    const user = this.getUser();
    return user?.role ?? null;
  }
}