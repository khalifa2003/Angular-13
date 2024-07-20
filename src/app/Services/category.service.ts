import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(`${environment.APIURL}/api/v1/categories`);
  }

  createCategory(formData: FormData): Observable<any> {
    return this.http.post(`${environment.APIURL}/api/v1/categories`, formData);
  }

  deleteCategory(_id: string): Observable<any> {
    return this.http.delete(`${environment.APIURL}/api/v1/categories/${_id}`);
  }
}
