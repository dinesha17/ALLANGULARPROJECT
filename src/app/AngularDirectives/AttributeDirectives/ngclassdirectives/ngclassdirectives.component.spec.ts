import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassdirectivesComponent } from './ngclassdirectives.component';

describe('NgclassdirectivesComponent', () => {
  let component: NgclassdirectivesComponent;
  let fixture: ComponentFixture<NgclassdirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgclassdirectivesComponent]
    });
    fixture = TestBed.createComponent(NgclassdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
