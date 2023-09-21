import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchcaseComponent } from './ng-switchcase.component';

describe('NgSwitchcaseComponent', () => {
  let component: NgSwitchcaseComponent;
  let fixture: ComponentFixture<NgSwitchcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSwitchcaseComponent]
    });
    fixture = TestBed.createComponent(NgSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
