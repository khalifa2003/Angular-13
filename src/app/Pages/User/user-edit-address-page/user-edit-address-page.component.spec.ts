import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditAddressPageComponent } from './user-edit-address-page.component';

describe('UserEditAddressPageComponent', () => {
  let component: UserEditAddressPageComponent;
  let fixture: ComponentFixture<UserEditAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditAddressPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
