import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { IBrand } from 'src/app/Models/ibrand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  listOfBrands: IBrand[] = [];
  responsiveOptions: any[];

  constructor(private brandService: BrandService, private router: Router) {
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
    this.brandService.getAllBrands().subscribe((res) => {
      this.listOfBrands = res.data;
    });
  }

  getProduct(item: IBrand) {
    this.router.navigate(['/products'], {
      queryParams: { brand: item._id },
    });
  }
}
