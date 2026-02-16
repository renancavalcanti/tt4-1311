import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  program?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "https://squid-app-a6n9k.ondigitalocean.app";
  constructor(private readonly http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`, {email, password})
  }

}

