import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
    });
  }
}
