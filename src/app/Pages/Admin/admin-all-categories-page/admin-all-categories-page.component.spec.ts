import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCategoriesPageComponent } from './admin-all-categories-page.component';

describe('AdminAllCategoriesPageComponent', () => {
  let component: AdminAllCategoriesPageComponent;
  let fixture: ComponentFixture<AdminAllCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllCategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
