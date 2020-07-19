import { Injectable } from '@angular/core';

import csc from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';

@Injectable({
  providedIn: 'root'
})
export class StateCityService {

  constructor() { }

  getStatesOfCountry():Array<IState>{
    return csc.getStatesOfCountry("101");
  }

  getCitiesFromState(id:string):Array<ICity>{
    return csc.getCitiesOfState(id);
  }
}
