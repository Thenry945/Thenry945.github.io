import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes}  from '@angular/router';

import { AppComponent }         from './app.component';
import { AppPageNotFound }      from './notfound.component';

const appRoutes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: AppComponent },
  { path: 'About',   component:AppComponent },
  { path: 'Technologies',   component:AppComponent },
  { path: 'Education',   component:AppComponent },
  { path: 'Contact',   component:AppComponent },
  { path: '**', component:AppPageNotFound}
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ AppComponent, AppPageNotFound ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

