import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCvComponent } from './check-cv.component';

describe('CheckCvComponent', () => {
  let component: CheckCvComponent;
  let fixture: ComponentFixture<CheckCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
