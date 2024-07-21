import { Component, Input, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { AuthService } from '../../../Services/auth.service';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() details: IProduct = {} as IProduct;
  img: String = '';
  constructor(
    private brandService: BrandService,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {}

  // ----------------------------------
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges(): void {
    this.brandService.getBrand(this.details.brand).subscribe((res) => {
      this.img = res.data.image;
    });
    this.updateStars();
  }

  private updateStars(): void {
    const fullStarsCount = Math.floor(this.details.ratingsAverage);
    const hasHalfStar = this.details.ratingsAverage % 1 !== 0;
    const emptyStarsCount = 5 - fullStarsCount - (hasHalfStar ? 1 : 0);

    this.fullStars = Array(fullStarsCount).fill(0);
    this.halfStar = hasHalfStar;
    this.emptyStars = Array(emptyStarsCount).fill(0);
  }
  // --------------------------------------
  showModal: boolean = false;
  addToCart() {
    this.AuthService.addToCart(this.details._id).subscribe((res) => {
      this.showModal = true;
      setTimeout(() => {
        this.showModal = false;
      }, 3000);
    });
  }
  closeModal() {
    this.showModal = false;
  }
}
