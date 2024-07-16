import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css'],
})
export class AdminAddCategoryComponent {
  categoryForm: FormGroup;
  showModal: boolean = false;

  constructor(private categoryService: CategoryService, fb: FormBuilder) {
    this.categoryForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      image: [null],
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.categoryForm.patchValue({ image: file });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const formData: FormData = new FormData();
      formData.append('name', this.categoryForm.value.name);
      formData.append('description', this.categoryForm.value.description);
      formData.append('image', this.categoryForm.get('image')?.value);
      this.categoryService.createCategory(formData).subscribe((res) => {
        this.openModal();
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

  handleNo() {
    this.closeModal();
    console.log('Not Confirmed');
  }

  handleYes() {
    this.closeModal();
    console.log('Confirmed');
  }

  get f() {
    return this.categoryForm.controls;
  }
}
