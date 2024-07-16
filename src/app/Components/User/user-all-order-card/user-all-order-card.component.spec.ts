import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllOrderCardComponent } from './user-all-order-card.component';

describe('UserAllOrderCardComponent', () => {
  let component: UserAllOrderCardComponent;
  let fixture: ComponentFixture<UserAllOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllOrderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
