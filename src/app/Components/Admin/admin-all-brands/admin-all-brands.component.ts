import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/Models/ibrand';
import { BrandService } from 'src/app/Services/brand.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-brands',
  templateUrl: './admin-all-brands.component.html',
  styleUrls: ['./admin-all-brands.component.css'],
})
export class AdminAllBrandsComponent implements OnInit {
  listOfBrands: IBrand[] = [];
  showModal: boolean = false;
  selectedBrand: IBrand = {} as IBrand;

  constructor(
    private BrandService: BrandService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.BrandService.getAllBrands().subscribe((data) => {
      this.listOfBrands = data.data;
    });
  }

  openModal(brand: IBrand) {
    this.showModal = true;
    this.selectedBrand = brand;
  }

  closeModal() {
    this.showModal = false;
  }

  handleNo() {
    this.closeModal();
    console.log('Not Confirmed');
  }

  delete(id: string) {
    this.BrandService.deleteBrand(id).subscribe((res) => {
      this.closeModal();
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([this.location.path()]);
      });
    });
  }
}
