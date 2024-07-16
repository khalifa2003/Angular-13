import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  APIURL: string = 'http://localhost:8000/api/v1';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // ------------------------------------- Public -------------------------------------
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  get isUserLogged(): boolean {
    return this.currentUserValue.data?.fname ? true : false;
  }

  login(formdata: FormData) {
    return this.http
      .post<any>(`${this.APIURL}/auth/login`, formdata)
      .pipe(
        tap((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.router.navigate(['/home']);
        })
      );
  }

  register(formdata: FormData) {
    return this.http.post<any>(`${this.APIURL}/auth/signup`, formdata);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
  }

  // ------------------------------------- Admin/Manager -------------------------------------
  isAdmin(): boolean {
    return (
      this.currentUserValue.data?.role == 'admin' ||
      this.currentUserValue.data?.role == 'manager'
    );
  }

  // ------------------------------------- User -------------------------------------
  // ***** Profile *****
  getMe(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.get(
      `${this.APIURL}/users/getMe?id=${this.currentUserValue.data?._id}`,
      { headers }
    );
  }

  updateMe(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.put(
      `${this.APIURL}/users/updateMe?id=${this.currentUserValue.data?._id}`,
      formData,
      { headers }
    );
  }

  // ***** Address *****
  addAddress(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.post(`${this.APIURL}/addresses`, formData, {
      headers,
    });
  }

  deleteAddress(addressId: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.delete(`${this.APIURL}/addresses/${addressId}`, {
      headers,
    });
  }

  getAddresses(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });

    return this.http.get(`${this.APIURL}/addresses`, { headers });
  }

  // ***** Favorite *****
  getWishlist(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.post(`${this.APIURL}/wishlist`, {
      headers,
    });
  }

  addToWishlist(product: IProduct) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    this.currentUserValue.data.wishlist.push(product._id);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));
    return this.http.post(`${this.APIURL}/wishlist`, product, {
      headers,
    });
  }

  isInWishlist(_id: string) {
    return this.isUserLogged
      ? this.currentUserValue.data.wishlist.includes(_id)
      : false;
  }

  removeFromWishlist(product: IProduct) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    this.currentUserValue.data.wishlist.splice(
      this.currentUserValue.data.wishlist.indexOf(product._id),
      1
    );
    localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));

    return this.http.delete(`${this.APIURL}/wishlist/${product._id}`, {
      headers,
    });
  }

  // ***** Cart *****
  addToCart(productId: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    console.log(`Bearer ${this.currentUserValue.token}`);

    return this.http.post(
      `${this.APIURL}/cart`,
      { productId },
      {
        headers,
      }
    );
  }

  getCart(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.get(`${this.APIURL}/cart`, { headers });
  }

  updateCartItemQuantity(productId: string, quantity: number): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.put(
      `${this.APIURL}/cart/${productId}`,
      { quantity },
      {
        headers,
      }
    );
  }

  deleteCart() {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.delete(`${this.APIURL}/cart`, { headers });
  }

  deleteCartItem(productId: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });
    return this.http.delete(`${this.APIURL}/cart/${productId}`, {
      headers,
    });
  }
  // ***** Review *****
  addReview(title: string, ratings: number, product: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });

    return this.http.post(
      `${this.APIURL}/reviews`,
      {
        title,
        ratings,
        product,
      },
      {
        headers,
      }
    );
  }

  getReviews(productId: string): Observable<any> {
    return this.http.get(
      `${this.APIURL}/reviews?productId=${productId}`
    );
  }
  deleteReview(id: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.currentUserValue.token}`,
    });

    return this.http.delete(`${this.APIURL}/reviews/${id}`, { headers });
  }
}
