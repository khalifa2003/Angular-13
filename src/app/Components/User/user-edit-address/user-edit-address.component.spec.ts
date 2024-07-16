import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditAddressComponent } from './user-edit-address.component';

describe('UserEditAddressComponent', () => {
  let component: UserEditAddressComponent;
  let fixture: ComponentFixture<UserEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
