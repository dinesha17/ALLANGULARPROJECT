import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyledirectivesComponent } from './ngstyledirectives.component';

describe('NgstyledirectivesComponent', () => {
  let component: NgstyledirectivesComponent;
  let fixture: ComponentFixture<NgstyledirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgstyledirectivesComponent]
    });
    fixture = TestBed.createComponent(NgstyledirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
