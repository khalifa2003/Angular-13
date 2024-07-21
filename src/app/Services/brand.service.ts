import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient, private AuthService: AuthService) {}

  getAllBrands(): Observable<any> {
    return this.http.get(`${environment.APIURL}/brands`);
  }

  getBrand(id: String): Observable<any> {
    return this.http.get(`${environment.APIURL}/brands/${id}`);
  }

  // private only admin/manager
  createBrand(formData: FormData) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.post(`${environment.APIURL}/brands`, formData, {
      headers,
    });
  }

  deleteBrand(id: string) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.AuthService.currentUserValue.token}`,
    });
    return this.http.delete(`${environment.APIURL}/brands/${id}`, { headers });
  }
}
