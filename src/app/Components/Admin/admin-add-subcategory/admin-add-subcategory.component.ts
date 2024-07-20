import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';
import { SubcategoryService } from 'src/app/Services/subcategory.service';

@Component({
  selector: 'app-admin-add-subcategory',
  templateUrl: './admin-add-subcategory.component.html',
  styleUrls: ['./admin-add-subcategory.component.css'],
})
export class AdminAddSubcategoryComponent implements OnInit {
  listOfCategories: ICategory[] = [];
  subcategoryForm: FormGroup;
  showModal: boolean = false;

  constructor(
    private SubcategoryService: SubcategoryService,
    fb: FormBuilder,
    private CategoryService: CategoryService
  ) {
    this.subcategoryForm = fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe((res) => {
      this.listOfCategories = res.data;
    });
  }

  onSubmit() {
    if (this.subcategoryForm.valid) {
      this.SubcategoryService.setSubcategory(
        this.subcategoryForm.value
      ).subscribe(() => {
        this.openModal();
        setTimeout(() => {
          this.closeModal();
        }, 3000);
        this.subcategoryForm.reset();
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
    return this.subcategoryForm.controls;
  }
}
