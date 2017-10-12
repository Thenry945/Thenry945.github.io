import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/about.html',
})
export class AppAbout {
    title: 'About';
}