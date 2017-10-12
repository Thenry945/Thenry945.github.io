import { Component } from '@angular/core';
import { IContact } from './contact';
import { ContactService } from './contact.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/technologies.html',
    providers: [ContactService]
})
export class AppContact {
    title: 'Contacts';
    
    icontacts: IContact[];
    constructor(private _contactService: ContactService){}

    ngOnInit() : void {
        this._contactService.getTechnologies().subscribe(icontacts => this.icontacts = icontacts);
    }

}