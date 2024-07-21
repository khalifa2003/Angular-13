import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  productDetails: IProduct = {} as IProduct;
  productDetails$: Observable<any> | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productDetails$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.productService.getProductById(params.get('id'));
      })
    );
    this.productDetails$.subscribe((res) => {
      this.productDetails = res.data;
    });
  }
}
