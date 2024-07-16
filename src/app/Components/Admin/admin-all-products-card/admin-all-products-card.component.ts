import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-admin-all-products-card',
  templateUrl: './admin-all-products-card.component.html',
  styleUrls: ['./admin-all-products-card.component.css'],
})
export class AdminAllProductsCardComponent implements OnInit {
  @Input() product: IProduct | undefined;
  deleteStatus: Boolean = false;
  constructor(private prodSer: ProductService) {}

  ngOnInit(): void {}
  remove(Id: String = '') {
    this.prodSer.deleteProduct(Id).subscribe((res) => {
      window.location.reload();
    });
  }
}
