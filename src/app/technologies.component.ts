import { Component } from '@angular/core';
import { ITechnologies } from '../interfaces/technologies';
import { TechnologiesService } from './services/technologies.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/technologies.html',
    providers: [TechnologiesService]
})
export class AppTechnologies {
    title: 'Technologies';
    
    techStack: ITechnologies[];
    constructor(private _technologyService: TechnologiesService){}

    ngOnInit() : void {
        this._technologyService.getTechnologies().subscribe(techStack => this.techStack = techStack.sort(function(a,b){return b.Proficiency-a.Proficiency}));
    }

}