import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressCardComponent } from './user-address-card.component';

describe('UserAddressCardComponent', () => {
  let component: UserAddressCardComponent;
  let fixture: ComponentFixture<UserAddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddressCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
