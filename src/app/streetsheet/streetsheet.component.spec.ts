import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetsheetComponent } from './streetsheet.component';

describe('StreetsheetComponent', () => {
  let component: StreetsheetComponent;
  let fixture: ComponentFixture<StreetsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
