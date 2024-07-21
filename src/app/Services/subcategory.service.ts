import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  constructor(private http: HttpClient, private AuthService: AuthService) {}

  // private only admin/manager
  setSubcategory(formData: FormData) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.post(`${environment.APIURL}/subcategories`, formData, {
      headers,
    });
  }

  // public
  getSubcategories(category: string): Observable<any> {
    return this.http.get(
      `${environment.APIURL}/subcategories?category=${category}`
    );
  }
}
