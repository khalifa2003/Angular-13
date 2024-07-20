import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-admin-all-products-card',
  templateUrl: './admin-all-products-card.component.html',
  styleUrls: ['./admin-all-products-card.component.css'],
})
export class AdminAllProductsCardComponent {
  @Input() product: IProduct = {} as IProduct;
  showModal: boolean = false;

  constructor(private ProductService: ProductService) {}

  delete() {
    this.ProductService.deleteProduct(this.product._id).subscribe((res) => {
      window.location.reload();
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
