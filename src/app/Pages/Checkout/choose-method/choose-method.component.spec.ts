import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMethodComponent } from './choose-method.component';

describe('ChooseMethodComponent', () => {
  let component: ChooseMethodComponent;
  let fixture: ComponentFixture<ChooseMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
