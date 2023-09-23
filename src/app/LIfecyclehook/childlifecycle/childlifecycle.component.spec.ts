import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlifecycleComponent } from './childlifecycle.component';

describe('ChildlifecycleComponent', () => {
  let component: ChildlifecycleComponent;
  let fixture: ComponentFixture<ChildlifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildlifecycleComponent]
    });
    fixture = TestBed.createComponent(ChildlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
