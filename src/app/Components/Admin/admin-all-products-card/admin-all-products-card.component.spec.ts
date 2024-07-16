import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProductsCardComponent } from './admin-all-products-card.component';

describe('AdminAllProductsCardComponent', () => {
  let component: AdminAllProductsCardComponent;
  let fixture: ComponentFixture<AdminAllProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllProductsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
