import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPatientComponent } from './search-patient/search-patient.component';

const myRoute:Routes=[{
  path:"",component:AddPatientComponent
},
{
  path:"view",component:ViewPatientComponent
},
{
  path:"search",component:SearchPatientComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ViewPatientComponent,
    NavigationComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
