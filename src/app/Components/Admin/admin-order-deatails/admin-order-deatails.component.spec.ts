import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDeatailsComponent } from './admin-order-deatails.component';

describe('AdminOrderDeatailsComponent', () => {
  let component: AdminOrderDeatailsComponent;
  let fixture: ComponentFixture<AdminOrderDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderDeatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
