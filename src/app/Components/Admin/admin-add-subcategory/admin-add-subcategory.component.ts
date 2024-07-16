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
  subcategoryForm: FormGroup;
  uploadStatus: Boolean = false;
  listOfCategories: ICategory[] = [];
  constructor(
    private subCatSer: SubcategoryService,
    fb: FormBuilder,
    private catSer: CategoryService
  ) {
    this.subcategoryForm = fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.catSer.getAllCategories().subscribe((res) => {
      this.listOfCategories = res.data;
    });
  }

  onSubmit() {
    if (this.subcategoryForm.valid) {
      this.subCatSer.setSubcategory(this.subcategoryForm.value).subscribe(
        (res) => {
          this.uploadStatus = true;
          this.subcategoryForm.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
