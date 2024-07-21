import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private AuthService: AuthService) {}

  // public
  getAllCategories(): Observable<any> {
    return this.http.get(`${environment.APIURL}/categories`);
  }

  // private only admin/manager
  createCategory(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.post(`${environment.APIURL}/categories`, formData, {
      headers,
    });
  }

  // private only admin/manager
  deleteCategory(_id: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.delete(`${environment.APIURL}/categories/${_id}`, {
      headers,
    });
  }
}
