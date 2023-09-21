import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforstrcturaldirectivesComponent } from './ngforstrcturaldirectives.component';

describe('NgforstrcturaldirectivesComponent', () => {
  let component: NgforstrcturaldirectivesComponent;
  let fixture: ComponentFixture<NgforstrcturaldirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforstrcturaldirectivesComponent]
    });
    fixture = TestBed.createComponent(NgforstrcturaldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
