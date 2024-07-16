import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-admin-all-products',
  templateUrl: './admin-all-products.component.html',
  styleUrls: ['./admin-all-products.component.css'],
})
export class AdminAllProductsComponent implements OnInit {
  products: IProduct[] = [];
  searchTerm: String = '';
  constructor(private prodSer: ProductService) {}

  ngOnInit(): void {
    this.prodSer.getAllProducts().subscribe((res) => {
      this.products = res.data;
    });
  }

  onSearch() {
    this.prodSer.searchProducts(this.searchTerm).subscribe((res) => {
      this.products = res.data;
    });
  }
}
