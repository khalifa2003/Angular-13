import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBrand } from 'src/app/Models/ibrand';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-product-page',
  templateUrl: './all-product-page.component.html',
  styleUrls: ['./all-product-page.component.css'],
})
export class AllProductPageComponent implements OnInit {
  listOfAllCategories: ICategory[] = [];
  listOfallProducts: IProduct[] = [];
  listOfAllBrands: IBrand[] = [];
  filterPriceForm: FormGroup = {} as FormGroup;
  params: any;

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((brands) => {
      this.listOfAllBrands = brands.data;
    });
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.listOfAllCategories = categories.data;
    });
    this.route.queryParams.subscribe((params) => {
      if (params['min']) {
        this.filterPriceForm.get('min')?.setValue(+params['min']);
      }
      if (params['max']) {
        this.filterPriceForm.get('max')?.setValue(+params['max']);
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.productService.searchProducts(params).subscribe((res) => {
        this.listOfallProducts = res.data;
        this.filterPriceForm = this.fb.group({
          min: [
            Math.min(...this.listOfallProducts.map((product) => product.price)),
            Validators.min(
              Math.min(
                ...this.listOfallProducts.map((product) => product.price)
              )
            ),
          ],
          max: [
            Math.max(...this.listOfallProducts.map((product) => product.price)),
            Validators.max(
              Math.max(
                ...this.listOfallProducts.map((product) => product.price)
              )
            ),
          ],
        });
      });
    });
  }

  sort: string = 'relevance';
  onFilterChange() {
    if (this.sort === 'priceAsc') {
      this.listOfallProducts.sort((a, b) => a.price - b.price);
    } else if (this.sort === 'priceDesc') {
      this.listOfallProducts.sort((a, b) => b.price - a.price);
    }
  }

  filterPrice() {
    this.updateQueryParams();
  }

  updateQueryParams(): void {
    const queryParams: any = {};

    if (this.filterPriceForm.value.min !== null) {
      queryParams.min = this.filterPriceForm.value.min;
    }

    if (this.filterPriceForm.value.max !== null) {
      queryParams.max = this.filterPriceForm.value.max;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
