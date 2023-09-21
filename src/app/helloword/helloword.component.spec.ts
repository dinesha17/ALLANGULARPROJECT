import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowordComponent } from './helloword.component';

describe('HellowordComponent', () => {
  let component: HellowordComponent;
  let fixture: ComponentFixture<HellowordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HellowordComponent]
    });
    fixture = TestBed.createComponent(HellowordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
