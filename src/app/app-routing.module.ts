import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { StreetsheetComponent } from './streetsheet/streetsheet.component'

const routes: Routes = [
        { path: '',  redirectTo: '/home', pathMatch: 'full'  },
        { path: 'home', component: HomeComponent },
        { path: 'streetsheet', component: StreetsheetComponent }
    ]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}