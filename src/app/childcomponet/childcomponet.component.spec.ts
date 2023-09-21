import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponetComponent } from './childcomponet.component';

describe('ChildcomponetComponent', () => {
  let component: ChildcomponetComponent;
  let fixture: ComponentFixture<ChildcomponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcomponetComponent]
    });
    fixture = TestBed.createComponent(ChildcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
