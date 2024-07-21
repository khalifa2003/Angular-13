import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { AuthService } from '../../../Services/auth.service';
interface responsiveOptions {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() products: IProduct[] = [];
  @Input() name: String = '';

  responsiveOptions: responsiveOptions[];

  constructor(private AuthService: AuthService) {
    this.responsiveOptions = [
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '800px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1800px',
        numVisible: 5,
        numScroll: 5,
      },
    ];
  }

  product: IProduct = {} as IProduct;

  addcart(value: IProduct) {
    this.product = value;
    console.log(value);
    if (this.AuthService.isUserLogged) {
      this.AuthService.addToCart(value._id).subscribe((res) => {
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 3000);
      });
    }
  }
  showModal: boolean = false;
  closeModal() {
    this.showModal = false;
  }
}
