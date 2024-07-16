import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProductsPageComponent } from './admin-all-products-page.component';

describe('AdminAllProductsPageComponent', () => {
  let component: AdminAllProductsPageComponent;
  let fixture: ComponentFixture<AdminAllProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
