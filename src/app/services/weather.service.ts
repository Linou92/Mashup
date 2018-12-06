import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWheather() {
    const url = 'https://api.wunderground.com/api/cc988597833ce2b4/forecast/q/Sweden/vaxjo.json';
    return this.http.get(url);
  }
}
