import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSubcategoryComponent } from './admin-add-subcategory.component';

describe('AdminAddSubcategoryComponent', () => {
  let component: AdminAddSubcategoryComponent;
  let fixture: ComponentFixture<AdminAddSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
