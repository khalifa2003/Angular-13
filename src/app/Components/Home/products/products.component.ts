import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() products: IProduct[] = [];
  @Input() name: String = '';

  constructor(private breakpointObserver: BreakpointObserver) {}

  slides: any;
  itemsPerSlide: number = 5;

  ngOnChanges(changes: SimpleChanges): void {
    this.updateSlides();
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.Web,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
            this.itemsPerSlide = 1;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
            this.itemsPerSlide = 2;
          } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
            this.itemsPerSlide = 3;
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
    this.slides = this.chunkItems(this.products, this.itemsPerSlide);
  }

  chunkItems(array: any, size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push({ items: array.slice(i, i + size) });
    }
    return result;
  }
}
