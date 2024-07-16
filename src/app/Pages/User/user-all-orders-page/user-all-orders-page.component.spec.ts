import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllOrdersPageComponent } from './user-all-orders-page.component';

describe('UserAllOrdersPageComponent', () => {
  let component: UserAllOrdersPageComponent;
  let fixture: ComponentFixture<UserAllOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllOrdersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
