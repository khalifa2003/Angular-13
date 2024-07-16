import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllOrderItemComponent } from './admin-all-order-item.component';

describe('AdminAllOrderItemComponent', () => {
  let component: AdminAllOrderItemComponent;
  let fixture: ComponentFixture<AdminAllOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllOrderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
