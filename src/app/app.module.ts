import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { } from 'app-router.module'
import { SiteHeaderComponent } from './site-header/site-header.component';
import { MealVenueComponent } from './meal-venue/meal-venue.component';
import { StreetsheetComponent } from './streetsheet/streetsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    MealVenueComponent,
    StreetsheetComponent
  ],
  imports: [
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
