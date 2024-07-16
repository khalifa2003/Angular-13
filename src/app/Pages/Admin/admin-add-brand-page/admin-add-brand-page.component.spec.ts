import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBrandPageComponent } from './admin-add-brand-page.component';

describe('AdminAddBrandPageComponent', () => {
  let component: AdminAddBrandPageComponent;
  let fixture: ComponentFixture<AdminAddBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddBrandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
