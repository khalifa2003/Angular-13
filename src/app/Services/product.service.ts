import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private AuthService: AuthService) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${environment.APIURL}/products`);
  }

  getProductById(id: String | null): Observable<any> {
    return this.http.get(`${environment.APIURL}/products/${id}`);
  }

  searchProducts(params: any): Observable<any> {
    let queryParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        queryParams = queryParams.set(key, params[key]);
      });
    }
    return this.http.get(`${environment.APIURL}/products`, {
      params: queryParams,
    });
  }

  // private only admin/manager
  createProduct(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.post(`${environment.APIURL}/products`, formData, {
      headers,
    });
  }

  updateProduct(formData: FormData, id: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.put(`${environment.APIURL}/products/${id}`, formData, {
      headers,
    });
  }

  deleteProduct(Id: String) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.delete(`${environment.APIURL}/products/${Id}`, {
      headers,
    });
  }
}
