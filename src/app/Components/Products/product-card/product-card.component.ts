import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct = {} as IProduct;
  isInWishlist = false;

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {}
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
  // --------------------------------------

  showModal: boolean = false;
  addToCart() {
    this.AuthService.addToCart(this.product._id).subscribe((res) => {
      this.showModal = true;
      setTimeout(() => {
        this.showModal = false;
      }, 3000);
    });
  }
  closeModal() {
    this.showModal = false;
  }
  // ----------------------------------
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges(): void {
    this.updateStars();
    this.getProducts();
  }

  private updateStars(): void {
    if (this.product.ratingsAverage) {
      const fullStarsCount = Math.floor(this.product.ratingsAverage);
      const hasHalfStar = this.product.ratingsAverage % 1 !== 0;
      const emptyStarsCount = 5 - fullStarsCount - (hasHalfStar ? 1 : 0);

      this.fullStars = Array(fullStarsCount).fill(0);
      this.halfStar = hasHalfStar;
      this.emptyStars = Array(emptyStarsCount).fill(0);
    }
  }
}
