import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpipesComponent } from './customerpipes.component';

describe('CustomerpipesComponent', () => {
  let component: CustomerpipesComponent;
  let fixture: ComponentFixture<CustomerpipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerpipesComponent]
    });
    fixture = TestBed.createComponent(CustomerpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
