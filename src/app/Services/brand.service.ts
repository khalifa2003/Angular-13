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
    return this.http.get(`${environment.APIURL}/brands`);
  }

  getBrand(id: String): Observable<any> {
    return this.http.get(`${environment.APIURL}/brands/${id}`);
  }

  createBrand(formData: FormData) {
    return this.http.post(`${environment.APIURL}/brands`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  deleteBrand(id: string) {
    return this.http.delete(`${environment.APIURL}/brands/${id}`);
  }
}
