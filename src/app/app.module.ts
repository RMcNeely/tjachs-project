import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { SiteHeaderComponent } from './site-header/site-header.component';
import { MealVenueComponent } from './meal-venue/meal-venue.component';
import { StreetsheetComponent } from './streetsheet/streetsheet.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    MealVenueComponent,
    StreetsheetComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([
        {
            path: 'streetsheet',
            component: StreetsheetComponent
        }
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }