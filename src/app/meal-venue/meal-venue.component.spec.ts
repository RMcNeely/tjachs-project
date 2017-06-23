import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealVenueComponent } from './meal-venue.component';

describe('MealVenueComponent', () => {
  let component: MealVenueComponent;
  let fixture: ComponentFixture<MealVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
