import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlodPressureComponent } from './blod-pressure.component';

describe('BlodPressureComponent', () => {
  let component: BlodPressureComponent;
  let fixture: ComponentFixture<BlodPressureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlodPressureComponent]
    });
    fixture = TestBed.createComponent(BlodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
