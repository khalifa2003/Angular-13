import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  addToCart() {
    this.notifyParent.emit(this.product);
  }

  @Output() notifyParent: EventEmitter<IProduct> = new EventEmitter();
}
