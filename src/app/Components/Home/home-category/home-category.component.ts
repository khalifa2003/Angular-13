import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/Models/icategory';
import { Router } from '@angular/router';

interface responsiveOptions {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}
@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css'],
})
export class HomeCategoryComponent implements OnInit {
  listOfCategories: ICategory[] = [];
  responsiveOptions: responsiveOptions[];

  constructor(
    private CategoryService: CategoryService,
    private router: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 3,
      },
      {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 2,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.CategoryService.getAllCategories().subscribe((res) => {
      this.listOfCategories = res.data;
    });
  }

  getProduct(item: ICategory) {
    this.router.navigate(['/products'], {
      queryParams: { brand: item._id },
    });
  }
}
