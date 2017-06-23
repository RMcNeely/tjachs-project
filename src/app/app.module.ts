import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { MealVenueComponent } from './meal-venue/meal-venue.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    MealVenueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
