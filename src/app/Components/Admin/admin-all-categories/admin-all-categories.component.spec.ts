import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCategoriesComponent } from './admin-all-categories.component';

describe('AdminAllCategoriesComponent', () => {
  let component: AdminAllCategoriesComponent;
  let fixture: ComponentFixture<AdminAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
