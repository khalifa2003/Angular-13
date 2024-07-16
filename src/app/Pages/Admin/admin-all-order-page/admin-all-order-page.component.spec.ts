import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllOrderPageComponent } from './admin-all-order-page.component';

describe('AdminAllOrderPageComponent', () => {
  let component: AdminAllOrderPageComponent;
  let fixture: ComponentFixture<AdminAllOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
