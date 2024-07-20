import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css'],
})
export class AdminAddCategoryComponent {
  showModal: boolean = false;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, fb: FormBuilder) {
    this.categoryForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
    });
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      this.categoryService
        .createCategory(this.categoryForm.value)
        .subscribe((res) => {
          this.openModal();
          setTimeout(() => {
            this.closeModal();
          }, 3000);
          this.categoryForm.reset();
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
    return this.categoryForm.controls;
  }
}
