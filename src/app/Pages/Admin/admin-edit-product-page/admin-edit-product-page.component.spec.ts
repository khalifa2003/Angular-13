import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProductPageComponent } from './admin-edit-product-page.component';

describe('AdminEditProductPageComponent', () => {
  let component: AdminEditProductPageComponent;
  let fixture: ComponentFixture<AdminEditProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
