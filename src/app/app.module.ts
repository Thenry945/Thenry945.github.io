import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes}  from '@angular/router';

import { AppComponent }             from './app.component';
import { AppHome }                  from './home.component';
import { AppAbout }                 from './about.component';
import { AppTechnologies }          from './technologies.component';
import { AppEducation }             from './education.component';
import { AppContact }               from './contact.component';
import { AppPageNotFound }          from './notfound.component';

const appRoutes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: AppHome },
  { path: 'About',   component:AppAbout },
  { path: 'Technologies',   component:AppTechnologies },
  { path: 'Education',   component:AppEducation },
  { path: 'Contact',   component:AppContact },
  { path: '**', component:AppPageNotFound}
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ AppComponent, AppHome, AppAbout, AppTechnologies, AppEducation, AppContact, AppPageNotFound],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

