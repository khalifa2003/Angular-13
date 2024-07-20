import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<any> {
    return this.http.get(`${environment.APIURL}/api/v1/brands`);
  }

  getBrand(id: String): Observable<any> {
    return this.http.get(`${environment.APIURL}/api/v1/brands/${id}`);
  }

  createBrand(formData: FormData) {
    return this.http.post(`${environment.APIURL}/api/v1/brands`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  deleteBrand(id: string) {
    return this.http.delete(`${environment.APIURL}/api/v1/brands/${id}`);
  }
}
