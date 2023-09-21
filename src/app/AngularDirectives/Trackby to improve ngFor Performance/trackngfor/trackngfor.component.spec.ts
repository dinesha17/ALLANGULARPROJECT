import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackngforComponent } from './trackngfor.component';

describe('TrackngforComponent', () => {
  let component: TrackngforComponent;
  let fixture: ComponentFixture<TrackngforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackngforComponent]
    });
    fixture = TestBed.createComponent(TrackngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
