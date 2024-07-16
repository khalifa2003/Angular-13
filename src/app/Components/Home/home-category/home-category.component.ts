import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ICategory } from 'src/app/Models/icategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css'],
})
export class HomeCategoryComponent implements OnInit {
  slides: any;
  itemsPerSlide: number = 4;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private catService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateSlides();
    this.breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Web,
        Breakpoints.XSmall,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
            this.itemsPerSlide = 1;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
            this.itemsPerSlide = 3;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
            this.itemsPerSlide = 5;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Web)) {
            this.itemsPerSlide = 6;
          }
          this.updateSlides();
        }
      });
  }

  updateSlides(): void {
    this.catService.getAllCategories().subscribe((res) => {
      this.slides = this.chunkItems(res.data, this.itemsPerSlide);
    });
  }

  chunkItems(array: any, size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push({ items: array.slice(i, i + size) });
    }
    return result;
  }

  getProduct(item: ICategory) {
    this.router.navigate(['/products'], {
      queryParams: { category: item._id },
    });
  }
}
