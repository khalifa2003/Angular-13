import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private prodService: ProductService) {}
  notebooks: IProduct[] = [];
  accessories: IProduct[] = [];
  bundles: IProduct[] = [];
  monitors: IProduct[] = [];

  lenovo: IProduct[] = [];
  hp: IProduct[] = [];
  asus: IProduct[] = [];
  dell: IProduct[] = [];
  msi: IProduct[] = [];

  ngOnInit(): void {
    this.prodService
      .searchProducts({ category: '665b9e7eee20a57f1c86a3df' })
      .subscribe((res) => {
        this.notebooks = res.data;
      });
    this.prodService
      .searchProducts({ category: '665b9ee3ee20a57f1c86a3e7' })
      .subscribe((res) => {
        this.accessories = res.data;
      });
    this.prodService
      .searchProducts({ category: '665b9f05ee20a57f1c86a3e9' })
      .subscribe((res) => {
        this.bundles = res.data;
      });
    this.prodService
      .searchProducts({ category: '665b9ebaee20a57f1c86a3e3' })
      .subscribe((res) => {
        this.monitors = res.data;
      });
    this.prodService
      .searchProducts({ brand: '665ba35aee20a57f1c86a423' })
      .subscribe((res) => {
        this.lenovo = res.data;
      });
    this.prodService
      .searchProducts({ brand: '665ba358ee20a57f1c86a421' })
      .subscribe((res) => {
        this.hp = res.data;
      });
    this.prodService
      .searchProducts({ brand: '665ba35dee20a57f1c86a425' })
      .subscribe((res) => {
        this.asus = res.data;
      });
    this.prodService
      .searchProducts({ brand: '665ba34bee20a57f1c86a41b' })
      .subscribe((res) => {
        this.dell = res.data;
      });
    this.prodService
      .searchProducts({ brand: '665ba361ee20a57f1c86a429' })
      .subscribe((res) => {
        this.msi = res.data;
      });
  }
}
