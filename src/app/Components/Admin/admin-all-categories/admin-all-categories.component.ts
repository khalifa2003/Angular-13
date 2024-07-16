import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-admin-all-categories',
  templateUrl: './admin-all-categories.component.html',
  styleUrls: ['./admin-all-categories.component.css'],
})
export class AdminAllCategoriesComponent implements OnInit {
  listOfCategories: ICategory[] = [];
  showModal: boolean = false;
  selectedCategory: ICategory = {} as ICategory;

  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe((data) => {
      this.listOfCategories = data.data;
    });
  }

  openModal(category: ICategory) {
    this.showModal = true;
    this.selectedCategory = category;
  }

  closeModal() {
    this.showModal = false;
  }

  handleNo() {
    this.closeModal();
    console.log('Not Confirmed');
  }

  delete(id: string) {
    this.CategoryService.deleteCategory(id).subscribe((res) => {
      this.closeModal();
      window.location.reload();
    });
  }
}
