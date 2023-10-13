import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforifComponent } from './ngforif.component';

describe('NgforifComponent', () => {
  let component: NgforifComponent;
  let fixture: ComponentFixture<NgforifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforifComponent]
    });
    fixture = TestBed.createComponent(NgforifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
