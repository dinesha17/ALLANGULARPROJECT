import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedatabindingComponent } from './typedatabinding.component';

describe('TypedatabindingComponent', () => {
  let component: TypedatabindingComponent;
  let fixture: ComponentFixture<TypedatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypedatabindingComponent]
    });
    fixture = TestBed.createComponent(TypedatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
