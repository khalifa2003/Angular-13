import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllAddresPageComponent } from './user-all-addres-page.component';

describe('UserAllAddresPageComponent', () => {
  let component: UserAllAddresPageComponent;
  let fixture: ComponentFixture<UserAllAddresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllAddresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllAddresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
