import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  APIURL: string = 'http://localhost:8000/api/v1';
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.APIURL}/categories`);
  }

  createCategory(formData: FormData): Observable<any> {
    return this.http.post(`${this.APIURL}/categories`, formData);
  }

  deleteCategory(_id: string) {
    return this.http.delete(`${this.APIURL}/categories/${_id}`);
  }
}
