import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentureimportComponent } from './accentureimport.component';

describe('AccentureimportComponent', () => {
  let component: AccentureimportComponent;
  let fixture: ComponentFixture<AccentureimportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccentureimportComponent]
    });
    fixture = TestBed.createComponent(AccentureimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
