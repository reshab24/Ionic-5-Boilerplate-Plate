import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import { environment } from '../../environments/environment';
import {catchError } from 'rxjs/operators';
import { RegistrationModel } from '../models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials):Observable<any>{
    return this.http.post(`${environment.apiAuth}/login`, credentials)
  }

  registration(credentials:RegistrationModel):Observable<any>{
    return this.http.post(`${environment.apiAuth}/register`,credentials)
  }
}
