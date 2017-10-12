import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IContact } from './contact';

@Injectable()
export class ContactService {
   private _contactsURL='data/contact.json';
   constructor(private _http: Http){}
   
   getTechnologies(): Observable<IContact[]> {
      return this._http.get(this._contactsURL)
      .map((response: Response) => <IContact[]> response.json());
   }

   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 
}