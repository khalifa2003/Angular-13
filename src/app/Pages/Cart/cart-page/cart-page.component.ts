import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  products: IProduct[] = [];
  cart: Cart = {} as Cart;
  constructor(
    private AuthService: AuthService,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.AuthService.getCart().subscribe((res) => {
      this.products = [];
      this.cart = res.data;
      this.cart.cartItems.map((id: any) => {
        this.ProductService.getProductById(id.product).subscribe((res) => {
          this.cart.cartItems.map((el: any, index: number) => {
            if (el.product == res.data._id) {
              this.cart.cartItems[index].product = res.data;
            }
          });
        });
      });
    });
  }
  addOne(id: string, quantity: number) {
    this.AuthService.updateCartItemQuantity(id, quantity + 1).subscribe(
      (res) => {
        this.getCart();
      }
    );
  }
  removeOne(id: string, quantity: number) {
    if (quantity == 1) {
      return;
    }
    this.AuthService.updateCartItemQuantity(id, quantity - 1).subscribe(
      (res) => {
        this.getCart();
      }
    );
  }
  deleteCart() {
    this.AuthService.deleteCart().subscribe(() => {
      this.cart = {} as Cart;
    });
  }
  // --------------------------------------

  showModal: boolean = false;
  selectedItem: string = '';
  openModel(id: string) {
    this.showModal = true;
    this.selectedItem = id;
  }
  closeModal() {
    this.showModal = false;
  }
  deleteItem() {
    this.AuthService.deleteCartItem(this.selectedItem).subscribe((res) => {
      this.getCart();
      this.closeModal();
    });
  }
}
