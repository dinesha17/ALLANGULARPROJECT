import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelandinterfaceComponent } from './modelandinterface.component';

describe('ModelandinterfaceComponent', () => {
  let component: ModelandinterfaceComponent;
  let fixture: ComponentFixture<ModelandinterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelandinterfaceComponent]
    });
    fixture = TestBed.createComponent(ModelandinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
