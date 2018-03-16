import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _api: HttpClient) { }

  cityId = {
    burbank: 4885983,
    seattle: 5809844,
    sanjose: 5397765,
    chicago: 4887398,
    dallas: 4190598,
    dc: 4138106
  }

  getCityInfo(city) {
    // Contact weather api
    let id = this.cityId[city];
    console.log(id);
    let url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=c1689d9b32f016346ce062c81c90e50e`
    return this._api.get(url);
  }
}
