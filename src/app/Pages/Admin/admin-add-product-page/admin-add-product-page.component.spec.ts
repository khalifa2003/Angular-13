import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProductPageComponent } from './admin-add-product-page.component';

describe('AdminAddProductPageComponent', () => {
  let component: AdminAddProductPageComponent;
  let fixture: ComponentFixture<AdminAddProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
