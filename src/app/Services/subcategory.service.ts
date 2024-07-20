import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  constructor(private http: HttpClient) {}

  setSubcategory(formData: FormData) {
    return this.http.post(
      `${environment.APIURL}/subcategories`,
      formData
    );
  }

  getSubcategories(category: string): Observable<any> {
    return this.http.get(
      `${environment.APIURL}/subcategories?category=${category}`
    );
  }
}
