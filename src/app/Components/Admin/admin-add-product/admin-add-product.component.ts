import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  showModal: boolean = false;

  listOfSubCategories: ISubcategory[] = [];
  listOfCategories: ICategory[] = [];
  listOfBrands: IBrand[] = [];

  constructor(
    private SubcategoryService: SubcategoryService,
    private prodSer: ProductService,
    private CategoryService: CategoryService,
    private BrandService: BrandService,
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
      images: fb.array(['']),
      category: ['', Validators.required],
      brand: ['', Validators.required],
      subcategory: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.prodSer.createProduct(this.productForm.value).subscribe((res) => {
        this.openModal();
        setTimeout(() => {
          this.closeModal();
        }, 3000);
        this.productForm.reset();
      });
    }
  }

  get allImages() {
    return this.productForm.get('images') as FormArray;
  }

  addImage(event: any) {
    this.allImages.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }

  ngOnInit(): void {
    this.getCategories();
    this.getBrands();
  }

  getCategories() {
    this.CategoryService.getAllCategories().subscribe((res) => {
      this.listOfCategories = res.data;
    });
  }

  getBrands() {
    this.BrandService.getAllBrands().subscribe((res) => {
      this.listOfBrands = res.data;
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

  get f() {
    return this.productForm.controls;
  }
}
