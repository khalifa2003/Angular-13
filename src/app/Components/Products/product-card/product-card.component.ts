import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProduct = {} as IProduct;
  isInWishlist = false;

  constructor(private AuthService: AuthService) {}

  getProducts() {
    if (this.AuthService.isInWishlist(this.product._id)) {
      this.isInWishlist = true;
    }
  }
  addToWishlist() {
    if (this.AuthService.isUserLogged) {
      this.AuthService.addToWishlist(this.product).subscribe((res) => {
        this.isInWishlist = true;
      });
    }
  }

  RemoveFromWishlist() {
    if (this.AuthService.isUserLogged) {
      this.AuthService.removeFromWishlist(this.product).subscribe((res) => {
        this.isInWishlist = false;
      });
    }
  }

  showModal: boolean = false;
  addToCart() {
    if (this.AuthService.isUserLogged) {
      this.AuthService.addToCart(this.product._id).subscribe((res) => {
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 3000);
      });
    }
  }
  closeModal() {
    this.showModal = false;
  }
  show = false;

  showAlert() {
    this.show = true;
  }

  closeAlert() {
    this.show = false;
  }
}
