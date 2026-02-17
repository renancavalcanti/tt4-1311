import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Material {
  id: string;
  course_code: string;
  course_name: string;
  created_at: string;
  description: string;
  posted_by: string;
  posted_by_user: PostedByUser;
  professor: string;
  semester: string;
  title: string;
  url: string;
}

export interface PostedByUser{
  id: string;
  email: string;
  name: string
}


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  API_URL = "https://squid-app-a6n9k.ondigitalocean.app";

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) { }

  listAll(): Observable<Material[]>{
    console.log(this.authService.getAuthHeaders())
    return this.http.get<Material[]>(`${this.API_URL}/materials`, {headers: new HttpHeaders(this.authService.getAuthHeaders())});
  }
}
