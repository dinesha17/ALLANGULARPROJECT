import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoraddressComponent } from './authoraddress.component';

describe('AuthoraddressComponent', () => {
  let component: AuthoraddressComponent;
  let fixture: ComponentFixture<AuthoraddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthoraddressComponent]
    });
    fixture = TestBed.createComponent(AuthoraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
