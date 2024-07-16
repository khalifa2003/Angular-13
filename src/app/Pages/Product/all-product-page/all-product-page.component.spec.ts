import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductPageComponent } from './all-product-page.component';

describe('AllProductPageComponent', () => {
  let component: AllProductPageComponent;
  let fixture: ComponentFixture<AllProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
