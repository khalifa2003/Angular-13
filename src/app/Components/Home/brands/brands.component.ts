import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BrandService } from 'src/app/Services/brand.service';
import { IBrand } from 'src/app/Models/ibrand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  slides: any;
  itemsPerSlide: number = 4;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateSlides();
    this.breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
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
            this.itemsPerSlide = 4;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
            this.itemsPerSlide = 5;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Web)) {
            this.itemsPerSlide = 6;
          }
          this.updateSlides();
        }
      });
  }

  updateSlides(): void {
    this.brandService.getAllBrands().subscribe((res) => {
      this.slides = this.chunkItems(res.data, this.itemsPerSlide);
      console.log(this.slides);
    });
  }

  chunkItems(array: any, size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push({ items: array.slice(i, i + size) });
    }
    return result;
  }

  getProduct(item: IBrand) {
    this.router.navigate(['/products'], {
      queryParams: { brand: item._id },
    });
  }
}
