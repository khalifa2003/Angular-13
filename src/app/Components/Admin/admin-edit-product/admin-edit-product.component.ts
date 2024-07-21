import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IBrand } from 'src/app/Models/ibrand';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ISubcategory } from 'src/app/Models/isubcategory';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { SubcategoryService } from 'src/app/Services/subcategory.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css'],
})
export class AdminEditProductComponent implements OnInit {
  productDetails$: Observable<any> | undefined;
  productDetails: IProduct = {} as IProduct;
  productForm: FormGroup = {} as FormGroup;

  listOfCategories: ICategory[] = [];
  listOfSubCategories: ISubcategory[] = [];
  listOfBrands: IBrand[] = [];
  productId: String | null = '';

  constructor(
    private ProductService: ProductService,
    private CategoryService: CategoryService,
    private SubcategoryService: SubcategoryService,
    private BrandService: BrandService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}
  get f() {
    return this.productForm.controls;
  }

  addImage(event: any) {
    this.allImages.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }

  get allImages() {
    return this.productForm.get('images') as FormArray;
  }

  onSubmit() {
    if (this.productForm?.valid) {
      const formData: FormData = new FormData();
      const values = this.productForm.value;

      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('quantity', values.quantity);
      formData.append('category', values.category);
      formData.append('brand', values.brand);
      formData.append('subcategories', values.subcategories);

      values.images.forEach((image: File, index: number) => {
        formData.append(`images`, image);
      });

      this.ProductService.updateProduct(
        formData,
        this.productDetails._id
      ).subscribe((res) => {
        this.router.navigate(['/admin/id/allproducts']);
      });
    }
  }

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe((res) => {
      this.listOfCategories = res.data;
    });

    this.BrandService.getAllBrands().subscribe((res) => {
      this.listOfBrands = res.data;
    });

    this.productDetails$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.productId = params.get('id');
        return this.ProductService.getProductById(this.productId);
      })
    );

    this.productDetails$.subscribe((res) => {
      this.productDetails = res.data;
      this.productForm = this.fb.group({
        title: [
          this.productDetails.title,
          [Validators.required, Validators.minLength(3)],
        ],
        description: [this.productDetails.description, [Validators.required]],
        price: [
          this.productDetails.price,
          [Validators.required, Validators.max(2000000)],
        ],
        quantity: [this.productDetails.quantity, Validators.required],
        category: [this.productDetails.category, Validators.required],
        brand: [this.productDetails.brand, Validators.required],
        subcategories: [this.productDetails.subcategories, Validators.required],
        images: this.fb.array(this.productDetails.images),
      });
    });
  }

  getSubcategories() {
    if (this.productForm.value.category != '') {
      this.SubcategoryService.getSubcategories(
        this.productForm.value.category
      ).subscribe((res) => {
        this.listOfSubCategories = res.data;
      });
    }
  }
}
