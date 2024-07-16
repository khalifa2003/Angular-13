import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllOrderComponent } from './user-all-order.component';

describe('UserAllOrderComponent', () => {
  let component: UserAllOrderComponent;
  let fixture: ComponentFixture<UserAllOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
