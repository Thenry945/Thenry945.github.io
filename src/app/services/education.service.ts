import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IEducation } from '../interfaces/education';

@Injectable()
export class EducationService {
   private _educationURL='data/education.json';
   constructor(private _http: Http){}
   
   getDegrees(): Observable<IEducation[]> {
      return this._http.get(this._educationURL)
      .map((response: Response) => <IEducation[]> response.json());
   }

   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 
}