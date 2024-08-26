import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Sign up a user
  signUpUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Send the userData directly, without wrapping it in an 'input' key
    return this.http.post(`${this.apiUrl}/trpc/user.createUser`, userData, { headers });
  }

  // Log in a user
  loginUser(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Send the credentials directly, without wrapping them in an 'input' key
    return this.http.post(`${this.apiUrl}/trpc/user.loginUser`, credentials, { headers });
  }
}
