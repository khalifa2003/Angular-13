import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  productDetails: any;
  iamgegallery: any;

  productId: any;
  productDetails$: Observable<any> | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productDetails$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.productId = params.get('id');
        return this.productService.getProductById(this.productId);
      })
    );
    this.productDetails$.subscribe((res) => {
      this.productDetails = res.data;
      this.iamgegallery = res.data.images;
    });
  }
}
