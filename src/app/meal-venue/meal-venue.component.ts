import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meal-venue',
  templateUrl: './meal-venue.component.html',
  styleUrls: ['./meal-venue.component.css']
})
export class MealVenueComponent implements OnInit {

  day: number;
  venue: string;

  constructor() {
      this.day = null
      this.venue = null
  }

  getDailyVenue() {
    return "Today!"
  };

  ngOnInit() {
      this.venue = this.getDailyVenue()
  }

}
