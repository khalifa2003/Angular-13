import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IBrand } from 'src/app/Models/ibrand';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css'],
})
export class AdminEditProductComponent implements OnInit {
  productDetails$: Observable<any> | undefined;
  productDetails: IProduct = {} as IProduct;
  productForm: FormGroup | undefined;
  uploadProgress: number = 0;
  uploadStatus: Boolean = false;

  listOfCategories: ICategory[] = [];
  listOfBrands: IBrand[] = [];
  productId: String | null = '';

  constructor(
    private prodSer: ProductService,
    private catSer: CategoryService,
    private brandSer: BrandService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  get getimages() {
    return this.productForm?.get('images') as FormArray;
  }
  addImg(event: any) {
    this.getimages.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }
  onFileChange(event: any) {
    const files = event.target.files;
    console.log(files);
    for (let file of files) {
      this.getimages.push(this.fb.control(file));
    }
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

      values.images.forEach((image: File, index: number) => {
        formData.append(`images`, image);
      });

      this.prodSer.createProduct(formData).subscribe({
        next: (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else if (event.status === 'success') {
            this.uploadStatus = true;
          }
        },
        error: (err) => {
          console.error('Product creation failed', err);
        },
      });
    }
  }

  ngOnInit(): void {
    this.catSer.getAllCategories().subscribe({
      next: (res) => {
        this.listOfCategories = res.data;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
        // Handle the error appropriately
      },
    });

    this.brandSer.getAllBrands().subscribe({
      next: (res) => {
        this.listOfBrands = res.data;
      },
      error: (err) => {
        console.error('Failed to load brands', err);
        // Handle the error appropriately
      },
    });

    this.productDetails$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.productId = params.get('id');
        return this.prodSer.getProductById(this.productId);
      })
    );
    this.productDetails$.subscribe((res) => {
      this.productDetails = res.data;
      this.productForm = this.fb.group({
        title: [
          this.productDetails.title,
          [Validators.required, Validators.minLength(3)],
        ],
        description: [
          this.productDetails.description,
          [Validators.required, Validators.minLength(20)],
        ],
        price: [
          this.productDetails.price,
          [Validators.required, Validators.max(2000000)],
        ],
        quantity: [this.productDetails.quantity, Validators.required],
        category: [this.productDetails.category, Validators.required],
        brand: [this.productDetails.brand, Validators.required],
        images: this.fb.array(this.productDetails.images),
      });
    });
  }
}
