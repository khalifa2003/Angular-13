import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteProductComponent } from './user-favorite-product.component';

describe('UserFavoriteProductComponent', () => {
  let component: UserFavoriteProductComponent;
  let fixture: ComponentFixture<UserFavoriteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
