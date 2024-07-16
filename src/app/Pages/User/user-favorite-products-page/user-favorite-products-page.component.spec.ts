import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteProductsPageComponent } from './user-favorite-products-page.component';

describe('UserFavoriteProductsPageComponent', () => {
  let component: UserFavoriteProductsPageComponent;
  let fixture: ComponentFixture<UserFavoriteProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
