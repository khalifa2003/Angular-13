import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  APIURL: string =
    'https://node-js-git-main-khalifa2003s-projects.vercel.app/api/v1';
  constructor(private http: HttpClient) {}

  setSubcategory(formData: FormData) {
    return this.http.post(`${this.APIURL}/subcategories`, formData);
  }

  getSubcategories(category: string): Observable<any> {
    return this.http.get(`${this.APIURL}/subcategories?category=${category}`);
  }
}
