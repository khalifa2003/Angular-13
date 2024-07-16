import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDetailsPageComponent } from './admin-order-details-page.component';

describe('AdminOrderDetailsPageComponent', () => {
  let component: AdminOrderDetailsPageComponent;
  let fixture: ComponentFixture<AdminOrderDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
