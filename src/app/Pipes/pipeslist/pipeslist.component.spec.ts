import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeslistComponent } from './pipeslist.component';

describe('PipeslistComponent', () => {
  let component: PipeslistComponent;
  let fixture: ComponentFixture<PipeslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeslistComponent]
    });
    fixture = TestBed.createComponent(PipeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
