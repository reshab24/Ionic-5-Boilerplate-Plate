import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {catchError } from 'rxjs/operators';
import { RegistrationModel } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials):Observable<any>{
    return this.http.post(`${environment.apiAuth}/login`, credentials).pipe(catchError(this.errorHandler))
  }

  registration(credentials:RegistrationModel):Observable<any>{
    return this.http.post(`${environment.apiAuth}/register`,credentials)
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
