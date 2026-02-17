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

  private currentUser: User | null = null;

  constructor(private readonly http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`, {email, password});
  }

  signup(name: string, email: string, password: string, program: string): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/signup`, {name, email, password, program});
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAuthHeaders(){
    const token = this.getToken();
    return {Authorization: `Bearer ${token}`}
  }

  setCurrentUser(user: User){
    this.currentUser = user;
  }

  getCurrentUser(): User | null{
    return this.currentUser;
  }

  clearToken(){
    localStorage.removeItem('token');
    this.currentUser = null;
  }
}

