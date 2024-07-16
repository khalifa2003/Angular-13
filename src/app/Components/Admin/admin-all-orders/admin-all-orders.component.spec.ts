import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllOrdersComponent } from './admin-all-orders.component';

describe('AdminAllOrdersComponent', () => {
  let component: AdminAllOrdersComponent;
  let fixture: ComponentFixture<AdminAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
