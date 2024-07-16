import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from 'src/app/Models/ibrand';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css'],
})
export class BrandCardComponent implements OnInit {
  @Input() brand: IBrand | undefined;
  constructor() {}

  ngOnInit(): void {}
}
