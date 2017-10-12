import { Component } from '@angular/core';
import { IEducation } from '../interfaces/education';
import { EducationService } from './education.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/education.html',
    providers: [EducationService]
})
export class AppEducation {
    title: 'Degrees';
    
    degrees: IEducation[];
    constructor(private _educationService: EducationService){}

    ngOnInit() : void {
        this._educationService.getDegrees().subscribe(idegrees => this.degrees = idegrees);
    }

}