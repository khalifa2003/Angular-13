import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllBrandsPageComponent } from './admin-all-brands-page.component';

describe('AdminAllBrandsPageComponent', () => {
  let component: AdminAllBrandsPageComponent;
  let fixture: ComponentFixture<AdminAllBrandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllBrandsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllBrandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
