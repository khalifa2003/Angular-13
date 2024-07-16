import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSubcategoryPageComponent } from './admin-add-subcategory-page.component';

describe('AdminAddSubcategoryPageComponent', () => {
  let component: AdminAddSubcategoryPageComponent;
  let fixture: ComponentFixture<AdminAddSubcategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSubcategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSubcategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
