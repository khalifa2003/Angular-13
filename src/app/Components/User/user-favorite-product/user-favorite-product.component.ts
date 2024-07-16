import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-user-favorite-product',
  templateUrl: './user-favorite-product.component.html',
  styleUrls: ['./user-favorite-product.component.css'],
})
export class UserFavoriteProductComponent implements OnInit {
  favoriteProducts: IProduct[] = [];

  constructor(
    private AuthService: AuthService,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist() {
    this.AuthService.getWishlist().subscribe((res) => {
      res.data.forEach((id: string) => {
        this.ProductService.getProductById(id).subscribe((res) => {
          this.favoriteProducts.push(res.data);
        });
      });
    });
  }
}
