import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardPageComponent } from './user-dashboard-page.component';

describe('UserDashboardPageComponent', () => {
  let component: UserDashboardPageComponent;
  let fixture: ComponentFixture<UserDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
