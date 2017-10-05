import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { StreetsheetComponent } from './streetsheet/streetsheet.component'

const routes: Routes = [
        { path: '/',  component: AppComponent }
        { path: 'streetsheet', component: StreetsheetComponent }
    ]

@NgModule({
    imports: [ Router.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}