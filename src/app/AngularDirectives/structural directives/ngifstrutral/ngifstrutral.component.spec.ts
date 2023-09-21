import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifstrutralComponent } from './ngifstrutral.component';

describe('NgifstrutralComponent', () => {
  let component: NgifstrutralComponent;
  let fixture: ComponentFixture<NgifstrutralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifstrutralComponent]
    });
    fixture = TestBed.createComponent(NgifstrutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
