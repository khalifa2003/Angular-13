import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCategoryPageComponent } from './admin-add-category-page.component';

describe('AdminAddCategoryPageComponent', () => {
  let component: AdminAddCategoryPageComponent;
  let fixture: ComponentFixture<AdminAddCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
