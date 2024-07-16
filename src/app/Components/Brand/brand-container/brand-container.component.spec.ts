import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandContainerComponent } from './brand-container.component';

describe('BrandContainerComponent', () => {
  let component: BrandContainerComponent;
  let fixture: ComponentFixture<BrandContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
