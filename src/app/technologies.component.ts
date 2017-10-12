import { Component } from '@angular/core';
import { ITechnologies } from './technologies';
import { TechnologiesService } from './technologies.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/technologies.html',
    providers: [TechnologiesService]
})
export class AppTechnologies {
    title: 'Technologies';
    
    itechnologies: ITechnologies[];
    constructor(private _technologyService: TechnologiesService){}

    ngOnInit() : void {
        this._technologyService.getTechnologies().subscribe(itechnologies => this.itechnologies = itechnologies);
    }

}