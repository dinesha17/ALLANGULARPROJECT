import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartlistComponent } from './chartlist.component';

describe('ChartlistComponent', () => {
  let component: ChartlistComponent;
  let fixture: ComponentFixture<ChartlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartlistComponent]
    });
    fixture = TestBed.createComponent(ChartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
