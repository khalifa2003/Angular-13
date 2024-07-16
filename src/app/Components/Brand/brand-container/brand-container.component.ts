import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from 'src/app/Models/ibrand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-container',
  templateUrl: './brand-container.component.html',
  styleUrls: ['./brand-container.component.css'],
})
export class BrandContainerComponent implements OnInit {
  brands: IBrand[] = [];
  constructor(private BrandSer: BrandService) {}

  ngOnInit(): void {
    this.BrandSer.getAllBrands().subscribe((BrandSer) => {
      this.brands = BrandSer.data;
    });
  }
}
