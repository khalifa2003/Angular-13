import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

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

  createProduct(formData: FormData): Observable<any> {
    return this.http
      .post(`${environment.APIURL}/products`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round(
                100 * (event.loaded / (event.total || 1))
              );
              return { status: 'progress', message: progress };
            case HttpEventType.Response:
              return event.body;
            default:
              return `Unhandled event: ${event.type}`;
          }
        })
      );
  }

  deleteProduct(Id: String) {
    return this.http.delete(`${environment.APIURL}/products/${Id}`);
  }
}
