import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllBrandsComponent } from './admin-all-brands.component';

describe('AdminAllBrandsComponent', () => {
  let component: AdminAllBrandsComponent;
  let fixture: ComponentFixture<AdminAllBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
