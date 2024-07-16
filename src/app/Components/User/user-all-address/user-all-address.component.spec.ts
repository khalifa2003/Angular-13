import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllAddressComponent } from './user-all-address.component';

describe('UserAllAddressComponent', () => {
  let component: UserAllAddressComponent;
  let fixture: ComponentFixture<UserAllAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
