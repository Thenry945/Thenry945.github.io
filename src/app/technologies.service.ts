import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ITechnologies } from './technologies';

@Injectable()
export class TechnologiesService {
   private _technologiesURL='app/technologies.json';
   constructor(private _http: Http){}
   
   getTechnologies(): Observable<ITechnologies[]> {
      return this._http.get(this._technologiesURL)
      .map((response: Response) => <ITechnologies[]> response.json());
   }

   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 
}