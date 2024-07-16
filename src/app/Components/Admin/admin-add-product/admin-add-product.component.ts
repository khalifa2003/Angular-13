import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { BrandService } from 'src/app/Services/brand.service';
import { ICategory } from 'src/app/Models/icategory';
import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/Models/ibrand';
import { ISubcategory } from 'src/app/Models/isubcategory';
import { SubcategoryService } from 'src/app/Services/subcategory.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css'],
})
export class AdminAddProductComponent implements OnInit {
  productForm: FormGroup;
  files: File[] = [];
  showModal: boolean = false;

  listOfCategories: ICategory[] = [];
  listOfSubCategories: ISubcategory[] = [];
  listOfBrands: IBrand[] = [];

  constructor(
    private SubcategoryService: SubcategoryService,
    private prodSer: ProductService,
    private catSer: CategoryService,
    private brandSer: BrandService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      price: ['', [Validators.required, Validators.max(2000000)]],
      quantity: [
        '',
        [Validators.required, Validators.max(1000), Validators.min(5)],
      ],
      images: [[], Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      subcategory: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    this.files = Array.from(event.target.files);
    const files = Array.from(event.target.files);
    const imagePreviewsContainer = document.querySelector(
      '.image-previews'
    ) as HTMLElement;
    imagePreviewsContainer.innerHTML = '';

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imagePreviewsContainer.appendChild(imgElement);
        imgElement.classList.add('image-preview');
        imgElement.style.width = '100px';
        imgElement.style.height = '100px';
      };
      reader.readAsDataURL(file);
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData: FormData = new FormData();
      formData.append('title', this.productForm.get('title')?.value);
      formData.append(
        'description',
        this.productForm.get('description')?.value
      );
      formData.append('price', this.productForm.get('price')?.value);
      formData.append('quantity', this.productForm.get('quantity')?.value);
      formData.append('category', this.productForm.get('category')?.value);
      formData.append(
        'subcategory',
        this.productForm.get('subcategory')?.value
      );
      formData.append('brand', this.productForm.get('brand')?.value);

      this.files.forEach((file: File) => {
        formData.append(`images`, file, file.name);
      });
      this.prodSer.createProduct(formData).subscribe(
        (e: any) => {
          this.openModal();
          this.productForm.reset();
        },
        (error) => {
          console.error('Upload Failed', error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.catSer.getAllCategories().subscribe({
      next: (res) => {
        this.listOfCategories = res.data;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      },
    });

    this.brandSer.getAllBrands().subscribe({
      next: (res) => {
        this.listOfBrands = res.data;
      },
      error: (err) => {
        console.error('Failed to load brands', err);
      },
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

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  handleNo() {
    this.closeModal();
    console.log('Not Confirmed');
  }

  handleYes() {
    this.closeModal();
    console.log('Confirmed');
  }

  get f() {
    return this.productForm.controls;
  }
}
