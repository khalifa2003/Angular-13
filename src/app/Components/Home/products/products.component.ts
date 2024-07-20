import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
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

  constructor() {
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
}
