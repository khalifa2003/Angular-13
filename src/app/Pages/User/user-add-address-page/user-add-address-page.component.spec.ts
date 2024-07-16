import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddAddressPageComponent } from './user-add-address-page.component';

describe('UserAddAddressPageComponent', () => {
  let component: UserAddAddressPageComponent;
  let fixture: ComponentFixture<UserAddAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddAddressPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
